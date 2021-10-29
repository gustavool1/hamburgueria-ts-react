import { ReactNode } from "react"
import { ButtonDefault, ButtonSmall} from './style.js'
interface ButtonProps{
    size?:boolean,
    callBack?:()=>void,
    children: string,
}

const Button = ({size, callBack, children}:ButtonProps) =>{
    return(
        <>
        {size ?
            (
                <ButtonDefault onClick={callBack}>{ children }</ButtonDefault>
            )
            :
            (
                <ButtonSmall onClick={callBack}>{ children }</ButtonSmall>

            )
        }
        </>
    )
}

export default Button