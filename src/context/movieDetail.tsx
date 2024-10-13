import { createContext, FC, ReactNode } from 'react'
import { useQueryMovieDetail } from '../hooks/useQueryMovieDetail'
import { MovieDetail } from '../models/movieDetail'

export interface MovieDetailContextProps {
  isLoading: boolean
  isError: boolean
  movieDetail: MovieDetail | undefined
}

interface MovieDetailProviderProps {
  children: ReactNode
  movieId: number
}

export const MovieDetailContext = createContext<MovieDetailContextProps>({
  isLoading: false,
  isError: false,
  movieDetail: undefined
})

export const MovieDetailProvider: FC<MovieDetailProviderProps> = ({ children, movieId }) => {
  const {isLoading, isError, movieDetail} = useQueryMovieDetail(movieId)
  
  return(
    <MovieDetailContext.Provider 
      value={{
        isLoading,
        isError,
        movieDetail
      }}>
        {children}
    </MovieDetailContext.Provider>
  )
}