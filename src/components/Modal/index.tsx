import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { Container, CartContainer }from "./style"
import Cart from "../Cart";
const Modal = () =>{
    const { isOpen } = useContext(ModalContext)
    return(
            <>
            {isOpen &&
                <Container>
                    <CartContainer>
                        <Cart/>
                    </CartContainer>
                    
                </Container>
            }
            </>
    )
}

export default Modal