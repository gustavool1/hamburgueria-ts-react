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
    
}



export const AccountContext = createContext <AccountProviderData>({} as AccountProviderData)

export const AccountProvider = ({ children }: AccountProviderProps) =>{
    const history = useHistory()
    const [ token ] = useState(localStorage.getItem('token') || '')
   

    const LogIn = (data:UserData) =>{
        api.post('/login', data)
        .then((response)=> {
            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem('userId', response.data.user.id)
            history.push('/')
            
        })
        .catch(()=> toast.error("Email ou senha incorretos"))
    }
    const Register = (data:RegisterData) =>{
        api.post('/register', data)
        .then(()=>{
            toast.configure()
            toast.success('Conta criada com sucesso')
            history.push('/login')

        })
        .catch((err)=>console.log(err))
    }
    const LogOut = () =>{
        localStorage.clear()
        history.push('/login')
    }
    
    return(
        <AccountContext.Provider value={{ LogIn,LogOut, Register, token}}>
            { children }
        </AccountContext.Provider>
    )
}