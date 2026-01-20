import { useCallback, useEffect, useRef, useState } from "react"
import "./App.css"
import { Movies } from "./componentes/Movies.jsx"
import { useMovies } from "./hooks/useMovies.js"
import debounce from "just-debounce-it"

function useSearch() {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    
    if (search.startsWith(' ')) {
      setError('Busqueda incorrecta')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener mas de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  
  const [ sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch() 
  const { movies, getMovie, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log("search", search)
      getMovie({ search })
    }, 300) 
    ,[]
  )

  // Formulario para evitar el useRef jsVanilla de forma que dependa
  // del formulario DOM y sus datos
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie({ search })
  }

  // Forma controlada usando el useState
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies( newSearch )
  }

  const handleSort = () => {
    setSort(!sort)
  }  

  return (
  <div className="page">
    <header>
      <h1>Buscador de peliculas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} name="query" placeholder="The Matrix, Pulp Fiction..." />
        <input type="checkbox"  onChange={handleSort} checked={sort}/>
        <button type="submit">Buscar</button>
      </form> 
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>

    <main>
      {
        loading ? <p>Cargando... </p> : <Movies movies={movies} />
      }
    </main>
  </div>
  )
}

export default App
