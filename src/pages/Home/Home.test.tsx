import { screen } from '@testing-library/react'

import { Home } from './Home'

import { render } from '@/utils/tests/index'

describe('Home component', () => {
  it('should render email link correctly', () => {
    render(<Home />)
    const emailLink = screen.getByRole('link', { name: 'Matthew Lewis' })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.getAttribute('href')).toEqual('mailto:matthew.a.lewis7@gmail.com?subject=Hello!&body=Hi Matthew,')
  })

  it('should render button with correct text', () => {
    render(<Home />)
    const button = screen.getByText('Book a room', { selector: 'a' })
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('title')).toEqual('rooms')
    expect(button.getAttribute('href')).toEqual('/rooms')
  })
})
