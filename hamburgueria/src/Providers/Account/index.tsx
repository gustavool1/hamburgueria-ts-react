import { createContext, ReactNode, useState } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface AccountProviderProps{
    children: ReactNode
}
export interface UserData{
    email?:string,
    password?:string
    
}
interface AccountProviderData{
    LogIn: (LoginData:UserData) => void 
}



export const AccountContext = createContext <AccountProviderData>({} as AccountProviderData)

export const AccountProvider = ({ children }: AccountProviderProps) =>{
    const history = useHistory()
    const [ token, setToken ] = useState(localStorage.getItem('token') || '')
    const LogIn = (data:UserData) =>{
        console.log(data)
        api.post('/login', data)
        .then((response)=> {
            console.log(response.data)
            localStorage.setItem("token", response.data.accessToken)
            history.push('/dashboard')
        })
        .catch((err)=> console.log(err))
    }

    return(
        <AccountContext.Provider value={{LogIn}}>
            { children }
        </AccountContext.Provider>
    )
}