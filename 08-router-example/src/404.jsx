import { Link } from "./Link"

export default function Page404() {
    return (
        <>
        <div>
            <h1>This is NOT fine</h1>
            <img 
                src="https://i.pinimg.com/originals/47/bf/98/47bf98cd9e7f1d64d60ee5b0be6c6613.jpg" 
                alt="hell yeah" 
            />
        </div>
            <Link to='/'>Volver al home</Link>
        </>
    )
}