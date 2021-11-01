import { createContext, ReactNode, useState } from "react";
import api from "../../Services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
interface CartProviderProps{
    children: ReactNode
}
interface MenuItem{
    title?:string;
    price?: number;
    type?: string;
    image?:string;
    id?:number,
    userId?:number
}
interface CartProviderData{
    getCart : () => void
    addToCart: (item:MenuItem) => void,
    removeFromCart: (item:MenuItem) => void,
    removeAllFromCart: () => void,
    cart: MenuItem[]
}
export const CartContext = createContext <CartProviderData>({} as CartProviderData)

export const CartProvider = ({ children }:CartProviderProps) =>{
    toast.configure() 
    const token = localStorage.getItem("token") || ''
    const [ cart, setCart ] = useState<MenuItem[]>([])
    const id = localStorage.getItem('id')
    const getCart = () =>{
        api.get("/cart" ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=> setCart(response.data))
    }
    const addToCart = (item:MenuItem) =>{
        console.log(item)
        item.userId= Number(localStorage.getItem('userId'))

        api.post("/cart", item,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(()=>{
            toast.success('Item adicionado ao carrinho')
        })
    }

    const removeFromCart = (item:MenuItem) =>{
        const newCart = cart.filter((menuItem)=> menuItem.title !== item.title)
        setCart(newCart)
    }
    const removeAllFromCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{ addToCart,cart,removeFromCart, removeAllFromCart, getCart}}>
            { children }
        </CartContext.Provider>
    )
}