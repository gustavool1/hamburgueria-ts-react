import { ReactNode } from "react";
import { AccountProvider } from './Account'
import { MenuProvider } from "./Menu";
import { ModalProvider } from "./Modal";
import { CartProvider } from './Cart'
interface ProviderProps{
    children: ReactNode
}

const Providers = ({ children}:ProviderProps ) =>{

    return(
        <AccountProvider>
            <MenuProvider>
                <ModalProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </ModalProvider>
            </MenuProvider>
        </AccountProvider>
    )
}

export default Providers