import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../Services/api";

interface ModalProviderProps{
    children:ReactNode
}
interface ModalProviderData{
    handleModal : () => void,
    
    isOpen: boolean
}

export const ModalContext = createContext <ModalProviderData>({} as ModalProviderData)

export const ModalProvider = ({ children }: ModalProviderProps) =>{
    const [ isOpen, setIsOpen ] = useState(false)
    const handleModal = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <ModalContext.Provider value={{ handleModal, isOpen }}>
            { children }
        </ModalContext.Provider>
    )
}