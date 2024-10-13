import { FC } from 'react'
import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  description?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ description = 'Oops! Something went wrong.' }) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorIcon}>!</div>
      <p>{description}</p>
    </div>
  )
}