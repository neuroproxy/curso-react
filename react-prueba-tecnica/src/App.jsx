import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import './App.css'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({fact})

    const handleClick = () => {
        refreshFact()
    }

    return(
        <main>
            <h1>Galeria</h1>
            <button
                onClick={handleClick}            
            >
                Obtener nuevo facto
            </button>
            <section>
            {fact && <p>{fact}</p>}
                {imageUrl && 
                    <img 
                        src={`${imageUrl}`} 
                        alt={`Img extraida de las tres palabras usando ${fact}`} 
                    />
                }
            </section>
        </main>
    )
}