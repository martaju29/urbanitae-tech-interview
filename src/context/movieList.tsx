import { createContext, FC, ReactNode, useState } from 'react'
import { Movie } from '../models/movieList'
import { useQueryMovieList } from '../hooks/useQueryMovieList'

export interface MoviesContextProps {
  isLoading: boolean
  isError: boolean
  movies: Movie[]
  currentPage: number
  totalPages: number,
  handleNextPage: VoidFunction
  handlePreviousPage: VoidFunction
  selectedMovieId?: number
  setSelectedMovieId: (id: number | undefined) => void
}

interface MoviesProviderProps {
  children: ReactNode
}

export const MovieListContext = createContext<MoviesContextProps>({
  isLoading: false,
  isError: false,
  movies: [],
  totalPages: 1,
  currentPage: 1,
  setSelectedMovieId: () => {},
  handleNextPage: () => {},
  handlePreviousPage: () => {}
})

export const MovieListProvider: FC<MoviesProviderProps> = ({ children }) => {
  const {isLoading, isError, movies, totalPages, currentPage, handleNextPage, handlePreviousPage} = useQueryMovieList()
  
  const [selectedMovieId, setSelectedMovieId] = useState<number | undefined>()

  return(
    <MovieListContext.Provider 
      value={{
        isLoading,
        isError,
        movies,
        totalPages,
        currentPage,
        handleNextPage,
        handlePreviousPage,
        selectedMovieId,
        setSelectedMovieId
      }}>
        {children}
    </MovieListContext.Provider>
  )
}