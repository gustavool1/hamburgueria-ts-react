import { useContext } from "react"
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import NavBar from "../../components/NavBar"
import { MenuContext } from "../../Providers/Menu"
import { Container, MenuContainer } from './style.js'
const Dashboard = () =>{
    const {  menu } = useContext(MenuContext)
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