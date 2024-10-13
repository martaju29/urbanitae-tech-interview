import { useState } from 'react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { Movie } from '../models/movieList'
import { fetchMovies } from '../services/movies'

export const useQueryMovieList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const { data, isError, isLoading } = useQuery<{
    movies: Movie[],
    nextCursor?: number,
    previousCursor?: number,
    totalPages: number
  }, Error>({
      queryKey: ['movies', currentPage],
      queryFn: () => fetchMovies({ pageParam: currentPage }),
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData
    }
  )

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return {
    isLoading,
    isError,
    movies: data?.movies ?? [],
    totalPages: data?.totalPages ?? 1,
    currentPage,
    handleNextPage,
    handlePreviousPage
  }
}