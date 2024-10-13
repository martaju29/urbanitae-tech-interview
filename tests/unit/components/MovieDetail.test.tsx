import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { MovieDetailProvider } from '../../../src/context/movieDetail'
import { MovieDetail } from '../../../src/components/MovieDetail/MovieDetail'
import { movieDetailMock } from '../../__mocks__/movieDetailMock'
import { useQueryMovieDetail } from '../../../src/hooks/useQueryMovieDetail'

const mockOnClose = vi.fn()

vi.mock('../../../src/hooks/useQueryMovieDetail', () => ({
  useQueryMovieDetail: vi.fn(),
}))

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

const renderWithProviders = (movieId: number) => {
  const queryClient = createQueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <MovieDetailProvider movieId={movieId}>
        <MovieDetail onClose={mockOnClose} />
      </MovieDetailProvider>
    </QueryClientProvider>
  )
}

describe('MovieDetail component testing', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('should render MovieDetail with the movie data', () => {
    vi.mocked(useQueryMovieDetail).mockReturnValue({
      isLoading: false,
      isError: false,
      movieDetail: movieDetailMock
    })

    renderWithProviders(533535)

    expect(screen.getByText(movieDetailMock.title)).toBeTruthy()
    expect(screen.getByText(movieDetailMock.overview)).toBeTruthy()
    expect(screen.getByText(movieDetailMock.vote_average.toFixed(1))).toBeTruthy()
  })

  test('should close the modal when Escape key is pressed', () => {
    vi.mocked(useQueryMovieDetail).mockReturnValue({
      isLoading: false,
      isError: false,
      movieDetail: movieDetailMock,
    })
  
    renderWithProviders(533535)
  
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
  
  test('should close the modal when the close button is clicked', () => {
    vi.mocked(useQueryMovieDetail).mockReturnValue({
      isLoading: false,
      isError: false,
      movieDetail: movieDetailMock,
    })
  
    renderWithProviders(533535)
  
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    fireEvent.click(closeButton)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
