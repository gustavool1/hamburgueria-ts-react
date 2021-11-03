import { createContext, ReactNode, useState } from "react";
import api from "../../Services/api";
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
    getTotal: () => void,
    cart: MenuItem[],
}
export const CartContext = createContext <CartProviderData>({} as CartProviderData)

export const CartProvider = ({ children }:CartProviderProps) =>{
    toast.configure() 
    const [ cart, setCart ] = useState<MenuItem[]>([])
    const id = localStorage.getItem('userId')
    const getCart = () =>{
        if(id?.length !==0){
            api.get(`/cart?userId=${id}` ,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response)=> setCart(response.data))
        }
        
    }
    const addToCart = (item:MenuItem) =>{
        item.userId= Number(localStorage.getItem('userId'))
        if(item.userId !== null || item.userId !== undefined ){
            api.post("/cart", item,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }).then(()=>{
                toast.success('Item adicionado ao carrinho')
    
            })
        }
    }
    const removeFromCart = (item:MenuItem) =>{
        api.delete(`cart/${item.id}`, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        } )
        .then((response)=>{
            getCart()
            toast.success("Item apagado com sucesso")
            console.log('aaaa')
        })
    }

   
    const removeAllFromCart = () =>{
        setCart([])
    }

    const getTotal = () =>{
        
    }

    return(
        <CartContext.Provider value={{ addToCart,cart,removeFromCart, removeAllFromCart, getCart, getTotal}}>
            { children }
        </CartContext.Provider>
    )
}