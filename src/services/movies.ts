import { MovieDetail } from '../models/movieDetail';
import { Movie, MovieList } from '../models/movieList';
const API_URL = 'https://api.themoviedb.org/3'
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const fetchMovies = async ({ pageParam = 1 }: { pageParam?: number }) => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?language=en-US&page=${pageParam}&api_key=${import.meta.env.VITE_API_KEY}`)
    const json = await response.json() as MovieList

    const currentPage = json.page
    const nextCursor = json.page < json.total_pages ? json.page + 1 : undefined
    const previousCursor = json.page > 1 ? json.page - 1 : undefined
    const totalPages = json.total_pages
    const movies: Movie[] = json.results
    
    return {
      movies,
      currentPage,
      nextCursor,
      previousCursor,
      totalPages
    }
  } catch (e) {
    throw new Error('Error retrieving popular movies')
  }
}

export const fetchMovieDetail = async (movie_id: number) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movie_id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`)
    const json = await response.json() as MovieDetail
    
    return json
  } catch (e) {
    throw new Error('Error getting movie details')
  }
}