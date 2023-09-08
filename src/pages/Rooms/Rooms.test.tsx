import { fireEvent, screen, waitFor } from '@testing-library/react'
import { test } from 'vitest'
import { expect } from 'vitest'

import { Rooms } from './Rooms'

import * as Hook from '@/hooks/useFetchRooms'
import { render } from '@/utils/tests'

const mockRooms: Room[] = [
  { name: 'Room 1', spots: 1, thumbnail: 'https://via.placeholder.com/150' },
  { name: 'Room 2', spots: 2, thumbnail: 'https://via.placeholder.com/150' },
]

test('should render rooms when data is available', async () => {
  const useFetchRoomsSpy = vi.spyOn(Hook, 'useFetchRooms')
  useFetchRoomsSpy.mockReturnValue({
    data: { rooms: mockRooms },
    error: null,
  })

  render(<Rooms />)

  await waitFor(() => {
    mockRooms.forEach((room) => {
      expect(screen.getByText(room.name)).toBeInTheDocument()
    })
  })

  mockRooms.forEach((room) => {
    expect(screen.getByText(room.name)).toBeInTheDocument()
  })

  vi.unmock('useFetchRooms')
})

test('should render skeletons when data is undefined and there are no errors', () => {
  const useFetchRoomsSpy = vi.spyOn(Hook, 'useFetchRooms')
  useFetchRoomsSpy.mockReturnValue({
    data: undefined,
    error: null,
  })

  render(<Rooms />)
  const skeletons = screen.getAllByTestId('room-card-skeleton')
  expect(skeletons.length).toBe(8)

  vi.unmock('useFetchRooms')
})

test('should render error message when an error occurs', () => {
  const useFetchRoomsSpy = vi.spyOn(Hook, 'useFetchRooms')
  useFetchRoomsSpy.mockReturnValue({
    data: undefined,
    error: new Error(),
  })
  render(<Rooms />)
  expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument()
  vi.unmock('useFetchRooms')
})

test('should reload the page when Refresh button is clicked', () => {
  const useFetchRoomsSpy = vi.spyOn(Hook, 'useFetchRooms')
  useFetchRoomsSpy.mockReturnValue({
    data: undefined,
    error: new Error(),
  })

  const reloadSpy = vi.fn()
  Object.defineProperty(window, 'location', {
    value: { reload: reloadSpy },
    writable: true,
  })

  render(<Rooms />)
  const button = screen.getByText('Refresh')
  fireEvent.click(button)

  expect(button).toBeInTheDocument()
  expect(button).toBeEnabled()
  expect(reloadSpy).toHaveBeenCalledTimes(1)
  vi.unmock('useFetchRooms')
})
