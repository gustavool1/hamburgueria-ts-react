import { ReactNode } from "react";
import { AccountProvider } from './Account'
interface ProviderProps{
    children: ReactNode
}

const Providers = ({ children}:ProviderProps ) =>{

    return(
        <AccountProvider>
          {children}
        </AccountProvider>
    )
}

export default Providers