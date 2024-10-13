import { useMovieList } from '../../hooks/useMovieList'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Loader } from '../Loader/Loader'
import { MovieList } from '../MovieList/MovieList'
import { Paginator } from '../Paginator/Paginator'
import styles from './MovieListContainer.module.scss'

export const MovieListContainer = () => {
  const { movies, setSelectedMovieId, currentPage, 
          totalPages, handleNextPage, handlePreviousPage, 
          isLoading, isError } = useMovieList()

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <ErrorMessage description="Oops! Something went wrong while fetching movies. Please try again later." />
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.noMovies}>No movies available at the moment.</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <MovieList 
        movies={movies} 
        setSelectedMovieId={setSelectedMovieId}
      />
      <Paginator 
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  )
}