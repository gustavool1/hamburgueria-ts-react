import Button from "../../components/Buttons"
import { Container,InfoContainer, IconContainer, Form } from "./style"
import { IoRestaurantOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { AccountContext } from "../../Providers/Account"
import { useHistory } from "react-router";
import Logo from "../../components/Logo"

interface UserData{
    email:string,
    password:string
}
const Login = () =>{
    const history = useHistory()
    const { LogIn } = useContext(AccountContext)
  
   
    const scheme = yup.object().shape({
        email:yup.string().required("* Email obrigatório").email("* Insira um email válido"),
        password:yup.string().required("* Senha obrigatória")
    })
    const { register, handleSubmit, formState:{ errors }} = useForm <UserData>({
        resolver: yupResolver(scheme)
    })

    const onSubmitFunc = (data: UserData) =>{
        LogIn(data)
    }
    const RedirectTo = () =>{
        history.push('/register')
    }
    return(
        <Container>
            <InfoContainer>
                <Logo/>
                <section>
                    <IconContainer>
                        <IoRestaurantOutline/>
                    </IconContainer>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
                </section>
            </InfoContainer>
            <Form onSubmit={handleSubmit(onSubmitFunc)}>
                <h3>Login</h3>
                <div>
                    <p>{errors.email?.message}</p>
                    <input placeholder='Email' {...register('email')}/>
                </div>
                <div>
                    <p>{errors.password?.message}</p>
                    <input placeholder='Senha'{...register('password')} type='password'/>
                </div>
                <Button>Logar</Button>
                <p>Crie sua conta para saborear muitas delicias e matar sua fome</p>
                <Button onClick={RedirectTo} size>Cadastre-se</Button>
            </Form>
        </Container>
    )
}

export default Login    