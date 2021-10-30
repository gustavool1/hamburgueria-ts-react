import { Container,InfoContainer, IconContainer, Form } from "./style"
import Input from "../../components/Input"
import Button from "../../components/Buttons"
import { IoRestaurantOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"

interface FormData{
    data:{
        name:string,
        email:string,
        password:string,
        confirmPassword:string
    }
}
const Register = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>()

    const onSubmit = ({data}:FormData) =>{
        console.log(data)
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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Cadastrar-se</h3>
                <p>Retornar para o login</p>
            </div>
            {/* <Input placeholder='Nome' /> */}
            {/* <Input placeholder='Email'/>
            <Input placeholder='Senha' type='password' />
            <Input placeholder='Confirmar senha' type='password'/> */}
            <Button>Cadastrar-se</Button>
        </Form>
    </Container>
    )
}

export default Register