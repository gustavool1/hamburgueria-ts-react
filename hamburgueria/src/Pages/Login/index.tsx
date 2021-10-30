import Button from "../../components/Buttons"
import { Container,InfoContainer, IconContainer, Form } from "./style"
import { IoRestaurantOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { AccountContext } from "../../Providers/Account"
interface UserData{
    email:string,
    password:string
}
const Login = () =>{
    const { LogIn } = useContext(AccountContext)
    const scheme = yup.object().shape({
        email:yup.string().required("Email obrigatório").email("Insira um email válido"),
        password:yup.string().required("Senha obrigatória")
    })
    const { register, handleSubmit, formState:{ errors }} = useForm <UserData>({
        resolver: yupResolver(scheme)
    })

    const onSubmitFunc = (data: UserData) =>{
        LogIn(data)
    }
    return(
        <Container>
            <InfoContainer>
                <h1>Burguer<span> Kenzie</span></h1>
                <section>
                    <IconContainer>
                        <IoRestaurantOutline/>
                    </IconContainer>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
                </section>
            </InfoContainer>
            <Form onSubmit={handleSubmit(onSubmitFunc)}>
                <h3>Login</h3>
                <input placeholder='Email' {...register('email')}/>
                <input placeholder='Senha'{...register('password')} type='password'/>
                <Button>Logar</Button>
                <p>Crie sua conta para saborear muitas delicias e matar sua fome</p>
                <Button size>Cadastre-se</Button>
            </Form>
        </Container>
    )
}

export default Login    