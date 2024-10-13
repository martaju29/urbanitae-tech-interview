import { useContext } from 'react'
import { MovieListContext } from '../context/movieList'

export function useMovieList () {
  const context = useContext(MovieListContext)

  if(context === undefined){
    throw new Error('useMovieList must be used within a MovieListProvider')
  }

  return context
}