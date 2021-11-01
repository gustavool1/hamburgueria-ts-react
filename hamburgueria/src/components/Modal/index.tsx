import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { Container, CartContainer,CloseModal }from "./style"
import { IoCloseOutline } from "react-icons/io5";
import Cart from "../Cart";
const Modal = () =>{
    const { isOpen, handleModal } = useContext(ModalContext)
    return(
            <>
            {isOpen &&
                <Container>
                    <CartContainer>
                        <div>
                            <h2>Carrinho de compras</h2>
                            <CloseModal>
                            <IoCloseOutline onClick={handleModal}/>
                            </CloseModal>
                        </div>
                        <Cart/>
                    </CartContainer>
                </Container>
            }
            </>
    )
}

export default Modal