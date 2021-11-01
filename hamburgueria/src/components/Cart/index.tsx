import { useContext } from "react"
import { CartContext } from "../../Providers/Cart"
import { Container, Total }from './style.js'

import { IoArchiveSharp } from "react-icons/io5";
import Button from "../Buttons";

const Cart = () =>{
    const { cart, removeFromCart, removeAllFromCart} = useContext(CartContext)
    return(
        <Container>
            { cart.length !==0 ?
            (
                cart.map((item)=>(
                    <div>
                        <img src={item.image} alt={item.title}/>
                        <p>{item.title}</p>
                        <button onClick={()=>removeFromCart(item)}>
                            <IoArchiveSharp/>
                        </button>
                    </div>
                ))
            )
            :
            (
                <div>
                    <p>vazio</p>
                </div>
            )
        }
        <Total>
            <Button size onClick={removeAllFromCart}>Remover todos</Button>
        </Total>
        </Container>
    )
}

export default Cart