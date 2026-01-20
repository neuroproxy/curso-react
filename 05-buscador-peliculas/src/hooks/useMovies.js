import { useCallback, useMemo, useRef, useState } from "react"
import { searchMovie } from "../services/movies"

export function useMovies ({ search, sort }) {
  const [ movies, setMovie ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const previousSearch = useRef(search)


  const getMovie = useCallback( async ({search}) => {
      if (search === previousSearch.current) return
   
      try {
        setLoading(true)
        setError(null)   
        previousSearch.current = search   
        const newMovie = await searchMovie({ search })
        setMovie(newMovie)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }, [])
  
  // Cuando cambie el sort y las peliculas, utiliza esta funcion de ordenamiento
  const sortedMovies =  useMemo(() => {
    console.log("memoSort")
    return sort
      ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
    
  return { movies: sortedMovies, getMovie, loading, error }
}