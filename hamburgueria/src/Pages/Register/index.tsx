import { Container,InfoContainer, IconContainer, Form } from "./style"
import Button from "../../components/Buttons"
import { IoRestaurantOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { AccountContext } from "../../Providers/Account"
import { Link } from "react-router-dom"
interface FormData{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}
const Register = () =>{
    const { Register } = useContext(AccountContext)

    const scheme = yup.object().shape({
        name:yup.string().required("* Nome obrigatório"),
        email:yup.string().required("* Email obrigatório").email("* Insira um email válido"),
        password:yup.string().required("* Senha obrigatória"),
        confirmPassword:yup.string().required("* Confirmação de senha obrigatório").oneOf([yup.ref('password')], 'As senhas não são idênticas')
    })


    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(scheme)
    })

    const onSubmit = (data:FormData) =>{
        Register(data)
    }
    console.log(errors)
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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h3>Cadastrar-se</h3>
                <p><Link to='/'>Retornar para Login</Link></p>
            </section>
            <div>
                <p>{errors.name?.message}</p>
                <input placeholder='Nome' {...register("name")} />
            </div>
            <div>
                <p>{errors.email?.message}</p>
                <input placeholder='Email'{...register("email")}/>
            </div>
            <div>
                <p>{errors.password?.message}</p>
                <input placeholder='Senha' type='password' {...register("password")}/>
            </div>
            <div>
                <p>{errors.confirmPassword?.message}</p>
                <input placeholder='Confirmar senha' type='password'{...register("confirmPassword")}/>
            </div>
            <Button>Cadastrar-se</Button>
        </Form>
    </Container>
    )
}

export default Register