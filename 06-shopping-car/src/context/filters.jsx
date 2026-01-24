import { createContext, useState } from "react";

// Consumo del contexto
export const FiltersContext = createContext()

// Proveedor de acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = 
    useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider 
            value={{
                filters,
                setFilters
            }}        
        >
            {children}
        </FiltersContext.Provider>
    )
}