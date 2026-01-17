const URLMOVIE = `https://www.omdbapi.com/?apikey=5a393804&s=`

export const searchMovie = async ({ search }) => {
    
    if (search === '') return null

    try {
        const response = await fetch(URLMOVIE + search)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (e) {
        console.log(e.message)
        throw new Error("Error searchin movie");        
    }
}