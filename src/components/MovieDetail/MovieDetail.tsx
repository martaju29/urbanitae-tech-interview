import { FC, useEffect, useRef } from 'react'
import styles from './MovieDetail.module.scss'
import { useMovieDetail } from '../../hooks/useMovieDetail'
import { Star } from '../../icons/Star'
import { Loader } from '../Loader/Loader'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

interface MovieDetailProps {
  onClose: () => void
}

export const MovieDetail: FC<MovieDetailProps> = ({ onClose }) => {
  const {movieDetail, isError, isLoading} = useMovieDetail()

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [onClose])

  const modalStyle: any = {
    '--poster-url': `url('https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}')` as string
  }

  return (
    <div className={styles.modalOverlay}>
      <div 
        className={styles.modalContent}
        style={modalStyle}
        ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose} aria-label='Close modal'>
          &times;
        </button>
        {isLoading && (
          <Loader />
        )}
        {isError && (
          <ErrorMessage />
        )}
        {!isLoading && !isError && movieDetail && (
          <>
            <h2>{movieDetail.title}</h2>
            <div className={styles.modalGrid}>
              <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt={movieDetail.title} />
              <div className={styles.movieInfo}>
                <div className={styles.rating}>
                  <Star size={20} /> <span>{movieDetail.vote_average.toFixed(1)}</span>
                </div>
                <div className={styles.infoItem}>
                  <strong>Director:</strong>
                  <span>{movieDetail.credits.crew.find(crewMember => crewMember.department === 'Directing')?.name ?? 'Unknown'}</span>
                </div>
                <div className={styles.infoItem}>
                  <strong>Actors:</strong>
                  <span>{movieDetail.credits.cast.map(castMember => castMember.name).slice(0, 5).join(', ')}</span>
                </div>
                <p>{movieDetail.overview}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}