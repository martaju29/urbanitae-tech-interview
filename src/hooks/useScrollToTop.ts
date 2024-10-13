import { useEffect } from 'react'

export const useScrollToTop = (currentPage: number) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage])
}