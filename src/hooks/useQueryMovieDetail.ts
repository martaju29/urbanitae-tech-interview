import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetail } from '../services/movies'
import { MovieDetail } from '../models/movieDetail'

export const useQueryMovieDetail = (movieId: number) => {
  const { data, isError, isLoading } = useQuery<MovieDetail, Error>({
      queryKey: ['movie-detail', movieId],
      queryFn: () => fetchMovieDetail(movieId),
      enabled: !!movieId,
      refetchOnWindowFocus: false
    }
  )

  return {
    movieDetail: data,
    isError,
    isLoading
  }
}