import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonDefault, ButtonGrey} from './style.js'
interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement>{
    size?:boolean,
    children: string,

}

const Button = ({size, children, ...rest }:ButtonProps) =>{
    return(
        
        !size ?
            (
                <ButtonDefault {...rest}>{ children }</ButtonDefault>
            )
            :
            (
                <ButtonGrey {...rest}>{ children }</ButtonGrey>
            )
        
        
    )
}

export default Button