import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Products({ products }) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <main className='products'>
            <ul>
                {products.slice(0, 10).map((product) => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                    <li key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.description} 
                        />
                            <strong>{product.title}</strong> - ${product.price}
                        <div>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <button style={{
                                backgroundColor: isProductInCart ? 'red' : '#09f'
                            }} 
                            onClick={() => {
                                isProductInCart
                                    ? removeFromCart(product)
                                    : addToCart(product)
                            }}
                            >
                                {
                                    isProductInCart
                                        ? <AddToCartIcon />
                                        : <RemoveFromCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}