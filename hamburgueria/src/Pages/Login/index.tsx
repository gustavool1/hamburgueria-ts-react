import Button from "../../components/Buttons"
import { Container,InfoContainer, IconContainer, Form } from "./style"
import { IoRestaurantOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { AccountContext } from "../../Providers/Account"
import { useHistory } from "react-router";

interface UserData{
    email:string,
    password:string
}
const Login = () =>{
    const { LogIn } = useContext(AccountContext)
    const history = useHistory()
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
        console.log('a')
        history.push('/register')
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