import { createContext, ReactNode, useState } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";
import { toast } from 'react-toastify'
interface AccountProviderProps{
    children: ReactNode
}
interface UserData{
    email?:string,
    password?:string
    
}
interface RegisterData{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}
interface AccountProviderData{
    LogIn: (LoginData:UserData) => void ,
    Register:(data:RegisterData) => void,
    LogOut:()=>void,
    token:string,
    isAuthenticated: boolean
}
interface DecodedToken {

}



export const AccountContext = createContext <AccountProviderData>({} as AccountProviderData)

export const AccountProvider = ({ children }: AccountProviderProps) =>{
    const history = useHistory()
    const [ token, setToken ] = useState(localStorage.getItem('token') || '')
    const [ userId, setUserId ] = useState(localStorage.getItem('userId') || 0)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const LogIn = (data:UserData) =>{
        console.log(data)
        api.post('/login', data)
        .then((response)=> {
            console.log('REsposta',response.data)
            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem('userId', response.data.user.id)
            history.push('/dashboard')
            setIsAuthenticated(true)
            
        })
        .catch((err)=> console.log(err))
    }
    const Register = (data:RegisterData) =>{
        console.log(data)
        api.post('/register', data)
        .then((response)=>{
            toast.configure()
            toast.success('Conta criada com sucesso')
            history.push('/')

        })
        .catch((err)=>console.log(err))
    }
    const LogOut = () =>{
        localStorage.clear()
        setIsAuthenticated(false)
    }
    return(
        <AccountContext.Provider value={{ LogIn,LogOut, Register, token, isAuthenticated}}>
            { children }
        </AccountContext.Provider>
    )
}