import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";

function CartItem({ image, price, title, quantify, addToCart }) {
    return (
    <li>
        <img 
            src={image}
            alt={title}
        />

        <div>
            <strong>{title}</strong> - ${price}
        </div>

        <footer>
            <small>
                Qty: {quantify}
            </small>
            <button onClick={addToCart}>
                +
            </button>
        </footer>
    </li>   
    )
}

export function Cart() {
    
    const cartCheckboxId = useId()
    const { cart, cleanCart, addToCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem 
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                {...product}
                            />
                        ))
                    }
                </ul>

                <button onClick={cleanCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}