import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchData<T>(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  if (response.status === 404) {
    throw new Error('Page not found')
  } else if (response.status === 500) {
    throw new Error('Server error')
  } else if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
  const data: T = await response.json()
  return data
}

export const fakeHttpResponse = async (room: Room, delay = 1800) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: { message: 'Successfully mutated', room } })
    }, delay)
  })
  return response
}
