import { FC } from 'react'
import { Star } from '../../icons/Star'
import { Movie } from '../../models/movieList'
import styles from './MovieList.module.scss'

interface MovieListProps {
  movies: Movie[],
  setSelectedMovieId: (movieId: number) => void
}

export const MovieList: FC<MovieListProps> = ({ movies, setSelectedMovieId }) => {
  return (
    <section className={styles.container}>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={styles.movieCard}
            onClick={() => setSelectedMovieId(movie.id)}
          >
            <div className={styles.moviePoster}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={styles.movieInfo}>
              <div className={styles.movieTitle}>{movie.title}</div>
              <div className={styles.movieRating}>
                <Star size={16} /> <span>{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}