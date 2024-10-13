import { FC } from 'react'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { ChevronLeft } from '../../icons/ChevronLeft'
import { ChevronRight } from '../../icons/ChevronRight'
import styles from './Paginator.module.scss'

interface PaginatorProps {
  currentPage: number,
  totalPages: number,
  handleNextPage: VoidFunction,
  handlePreviousPage: VoidFunction
}

export const Paginator: FC<PaginatorProps> = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
  useScrollToTop(currentPage)

  return (
    <div className={styles.paginator}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-label='Previous page'
      >
        <ChevronLeft size={20} />
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label='Next page'
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}