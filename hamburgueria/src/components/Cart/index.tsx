import { useContext, useEffect } from "react"
import { CartContext } from "../../Providers/Cart"
import { Container, Total, CartContainer, InfoContainer,  ItensContainer, Item, Empty}from './style'
import {IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../../Providers/Modal";
import {FaTrash} from "react-icons/fa"

const Cart = () =>{
    const { cart, getCart, removeFromCart } = useContext(CartContext)
    const { handleModal } = useContext(ModalContext)
    useEffect(()=>{
        getCart()
    },[])
    return(

        <Container>
            <CartContainer>
                <InfoContainer>
                    <h2>Carrinho de compras</h2>
                    <IoCloseOutline onClick={handleModal} />
                </InfoContainer>
                <ItensContainer>
                { cart.length !==0 ?
                (       <>
                        {cart.map((item, key)=>(
                            <Item className='item-cart'key={key}>
                                <img src={item.image} alt={item.title}/>
                                <p>{item.title}</p>
                                <FaTrash onClick={()=>removeFromCart(item)}/>
                            </Item>
                        ))}
                        </>
                )
                :
                (
                    <Empty>
                        <p>Sua sacola está vazia</p>
                    </Empty>
                )
            
                }
                
                </ItensContainer>
                <Total>
                    <h2>Total</h2>
                    <p>R${cart.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2)}</p>
                </Total>
            </CartContainer>
        </Container>
        
    )
}

export default Cart