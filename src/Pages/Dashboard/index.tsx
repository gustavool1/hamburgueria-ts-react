import { useContext } from "react"
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import NavBar from "../../components/NavBar"
import { MenuContext } from "../../Providers/Menu"
import { Container, MenuContainer, CircularContainer } from './style.js'
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from "react"
import { useState } from "react"
const Dashboard = () =>{
    const {  menu } = useContext(MenuContext)
    const [ watingData, setWaitingData ] = useState(true)
    useEffect( ()=> {
        setTimeout( () => {
            setWaitingData(false)
        }, 2000)

    },[])
    return(
        
        <Container>
            <NavBar/>
            <Modal/>
            <MenuContainer>
            {watingData ?
                (
                    <CircularContainer>
                        <h2>Buscando dados...</h2>
                        <CircularProgress />
                    </CircularContainer>
                )
                :
                (
                    menu.map((item, index) => (
                        <Card MenuItem={ item } key={ index }/>
                    )) 
                )
            }
            
            </MenuContainer>
        </Container>
        
    )
}

export default Dashboard