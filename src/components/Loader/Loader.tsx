import styles from './Loader.module.scss'

export const Loader = () => {
  const loaderLines = ['top', 'right', 'bottom', 'left']

  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        {loaderLines.map((position) => (
          <div key={position} className={`${styles.loaderLine} ${styles[position]}`}></div>
        ))}
      </div>
    </div>
  )
}