import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { AppRoutes } from '@/routes/routes'

export const queryClient = new QueryClient({
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

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
