import { useContext } from 'react'
import { MovieDetailContext } from '../context/movieDetail'

export function useMovieDetail () {
  const context = useContext(MovieDetailContext)

  if(context === undefined){
    throw new Error('useMovieDetail must be used within a MovieDetailProvider')
  }

  return context
}