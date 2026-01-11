import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        const url = `https://cataas.com/cat/says/${encodeURIComponent(threeFirstWord)}`
        setImageUrl(url)    
    }, [fact])

    return { imageUrl }
}