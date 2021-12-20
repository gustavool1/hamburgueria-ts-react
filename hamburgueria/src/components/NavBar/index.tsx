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
    const {  LogOut } = useContext(AccountContext)
    const { filteringMenu, getMenu } = useContext(MenuContext)
    const [inputValue, setInputValue ] = useState('')
    const handleChange = (e:any) =>{
        setInputValue(e.target.value)
        filteringMenu(inputValue)
        console.log(inputValue)
    }
    useEffect(()=>{
        if(inputValue.length === 0){
            getMenu()
        }
    },[inputValue, getMenu])
    return(
        <Container>
            <LogoContainer>
                <Logo/>
            </LogoContainer>

            <InteractionContainer>
                <div>
                    <input type="text" placeholder="Search.." name="search2" onChange={handleChange}  value={inputValue}/>
                    <button ><IoSearchOutline/></button>
                </div>
                <IconsContainer>
                    {localStorage.getItem('token')?.length !==0 ?
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
                        <Link to='/login'>Entrar</Link>
                    )
                    } 
                </IconsContainer>
            </InteractionContainer>
        </Container>
    )
}

export default NavBar