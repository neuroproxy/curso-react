import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {

    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    console.log({
        minPriceFilterId,
        categoryFilterId
    })

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="electronics">Electronica</option>
                    <option value="jewelery">Joyeria</option>
                    <option value="men's clothing">Ropa de hombre</option>
                    <option value="women's clothing">Ropa de mujer</option>
                </select>
            </div>
        </section>
    )
}