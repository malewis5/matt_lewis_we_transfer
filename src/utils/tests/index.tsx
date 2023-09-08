import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, RenderResult, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { toast } from 'react-toastify'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0.5 * (60 * 1000), // 30 seconds
      cacheTime: 1 * (60 * 1000), // 1 minute
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(`Something went wrong: ${error.message}`)
      }
    },
  }),
})

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
