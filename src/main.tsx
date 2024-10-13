import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MovieListProvider } from './context/movieList.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MovieListProvider>
        <App />
      </MovieListProvider>
    </QueryClientProvider>
  </StrictMode>,
)
