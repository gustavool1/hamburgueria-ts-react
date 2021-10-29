import { InputHTMLAttributes } from "react"
import { InputContainer, Container } from "./style"
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    label?:string,
    placeholder?:string
}
const Input = ({ label, placeholder, ...rest }:InputProps) =>{
    return(
        <Container>
            <InputContainer {...rest}placeholder={placeholder}/>
        </Container>
    )
}

export default Input