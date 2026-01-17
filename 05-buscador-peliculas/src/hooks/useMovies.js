import { useState } from "react"
import { searchMovie } from "../services/movies"

export function useMovies ({ search }) {
  const [ movies, setMovie ] = useState([])

  const getMovie = async () => {
    const newMovie = await searchMovie({ search })
    setMovie(newMovie)
  }

  return { movies, getMovie }
}