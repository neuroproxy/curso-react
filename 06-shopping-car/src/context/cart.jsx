import { createContext, useState } from "react"; 

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantify +=1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...(prevState),
            {
                ...product,
                quantify: 1
            }
        ]))

    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const cleanCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            cleanCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}