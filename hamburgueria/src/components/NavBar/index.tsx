import Logo from '../Logo'
import { Container, LogoContainer, InteractionContainer, IconsContainer  } from './style'
import {  IoSearchOutline, IoCart, IoLogInOutline} from "react-icons/io5"
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../Providers/Modal'
import { AccountContext } from '../../Providers/Account'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../Providers/Menu'
const NavBar = () =>{
    const { handleModal } = useContext(ModalContext)
    const { isAuthenticated, LogOut } = useContext(AccountContext)
    const { filteringMenu, getMenu } = useContext(MenuContext)
    const [inputValue, setInputValue ] = useState('')
    const handleChange = (e:any) =>{
        filteringMenu(inputValue)
    }
    useEffect(()=>{
        if(inputValue.length === 0){
            getMenu()
        }
    },[inputValue])
    return(
        <Container>
            <LogoContainer>
                <Logo/>
            </LogoContainer>

            <InteractionContainer>
                <div>
                    <input type="text" placeholder="Search.." name="search2" onChange={(e)=>setInputValue(e.target.value)}  value={inputValue}/>
                    <button onClick={handleChange}><IoSearchOutline/></button>
                </div>
                <IconsContainer>
                    {isAuthenticated ?
                    (
                        <>
                        <button onClick={handleModal}>
                         <IoCart/>
                        </button>
                        <button onClick={LogOut}>
                            <IoLogInOutline/>
                        </button>
                        </>
                    ):
                    (
                        <Link to='/'>Entrar</Link>
                    )
                    } 
                    
                </IconsContainer>
            </InteractionContainer>
        </Container>
    )
}

export default NavBar