import React from 'react'
import { describe, test, expect, beforeEach, vi } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { MovieList } from '../../../src/components/MovieList/MovieList'
import { movieListMock } from '../../__mocks__/movieListMock'

const mockSetSelectedMovieId = vi.fn()

describe('MovieList component testing', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('should render MovieList with movies', () => {
    render(<MovieList movies={movieListMock.results} setSelectedMovieId={mockSetSelectedMovieId} />)

    movieListMock.results.forEach(movie => {
      expect(screen.getByText(movie.title)).toBeTruthy()
    })
  })

  test('should call setSelectedMovieId when a movie is clicked', () => {
    render(<MovieList movies={movieListMock.results} setSelectedMovieId={mockSetSelectedMovieId} />)

    mockSetSelectedMovieId.mockImplementation((id) => {
      console.log(`setSelectedMovieId called with id: ${id}`)
    })

    const firstMovie = movieListMock.results[0]
    const movieElement = screen.getByText(firstMovie.title).closest('div')
    
    if(movieElement) {
      fireEvent.click(movieElement)
    }

    expect(mockSetSelectedMovieId).toHaveBeenCalledWith(firstMovie.id)
  })


})
