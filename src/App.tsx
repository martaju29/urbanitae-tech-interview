import { MovieDetail } from './components/MovieDetail/MovieDetail'
import { useMovieList } from './hooks/useMovieList'
import { MovieDetailProvider } from './context/movieDetail'
import { MovieListContainer } from './components/MovieListContainer/MovieListContainer'
import styles from './App.module.scss'

function App() {
  const {selectedMovieId, setSelectedMovieId} = useMovieList()

  return (
    <>
    <header>
      <h1 className={styles.mainTitle}>Listado de películas</h1>
    </header>
    <main>
      <MovieListContainer />
      {
        selectedMovieId &&
        <MovieDetailProvider movieId={selectedMovieId}>
          <MovieDetail onClose={() => setSelectedMovieId(undefined)} />
        </MovieDetailProvider>
      }
    </main>
    </>
  )
}

export default App
