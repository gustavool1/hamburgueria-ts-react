import { createContext, ReactNode,  useState } from "react";
import api from "../../Services/api";

interface MenuProviderProps{
    children:ReactNode
}
interface MenuProviderData{
    getMenu: () => void;
    menu: MenuItem[],
    filteringMenu: (inptValue:string) => void 
}
interface MenuItem{
    title?:string;
    price?: number;
    type?: string;
    image?:string;
}
export const MenuContext = createContext <MenuProviderData>({} as MenuProviderData)

export const MenuProvider = ({ children }: MenuProviderProps) =>{
    const [ menu,  setMenu ] = useState<MenuItem[]>([])
    const getMenu = () =>{
        api.get('/menu')
         .then((response)=>{
            setMenu([...response.data])
         })
    }
    const filteringMenu = (inptValue:string) =>{
        const filteredMenu = menu.filter((menuItem)=> menuItem.title?.toLowerCase()?.includes(inptValue.toLowerCase()))
        setMenu(filteredMenu)
    }
    return(
        <MenuContext.Provider value={{ getMenu,menu, filteringMenu }}>
            { children }
        </MenuContext.Provider>
    )
}