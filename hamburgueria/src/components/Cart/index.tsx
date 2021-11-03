import { useContext, useEffect } from "react"
import { CartContext } from "../../Providers/Cart"
import { Container, Total, CartContainer, CloseModal }from './style.js'
import { IoArchiveSharp,IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../../Providers/Modal";

const Cart = () =>{
    const { cart, getCart, removeFromCart } = useContext(CartContext)
    const { handleModal } = useContext(ModalContext)
    useEffect(()=>{
        getCart()
        
    },[getCart])
    return(
        <Container>
            <CartContainer>
                <div className='action-container'>
                    <h2>Carrinho de compras</h2>
                    <CloseModal>
                    <IoCloseOutline onClick={handleModal}/>
                    </CloseModal>
                </div>
                { cart.length !==0 ?
                (
                    cart.map((item, key)=>(
                        <div className='item-cart'key={key}>
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
                        <p>Vazio</p>
                    </div>
                )
            
                }
            </CartContainer>
            <Total>
                <h2>Total</h2>
                <p>R${cart.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2)}</p>
                 
            </Total>
        </Container>
    )
}

export default Cart