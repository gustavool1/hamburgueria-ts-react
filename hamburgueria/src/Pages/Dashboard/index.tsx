import { useContext, useEffect } from "react"
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import NavBar from "../../components/NavBar"
import { AccountContext } from "../../Providers/Account"
import { CartContext } from "../../Providers/Cart"
import { MenuContext } from "../../Providers/Menu"
import { Container, MenuContainer } from './style.js'
const Dashboard = () =>{
    
    const { getMenu, menu } = useContext(MenuContext)
    const { getCart } = useContext(CartContext)
    useEffect(()=>{
        getMenu() 
        getCart()
    },[])
    
    return(

        <Container>
            <NavBar/>
            <Modal/>
            <MenuContainer>
              
            {menu.map((item, index)=> (
                <Card MenuItem={ item } key={ index }/>
            )) }
            </MenuContainer>
        </Container>
    )
}

export default Dashboard