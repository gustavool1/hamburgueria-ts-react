import Button from "../../components/Buttons"
import { Container,InfoContainer, IconContainer, Form } from "./style"
import { IoRestaurantOutline } from "react-icons/io5"
import Input from "../../components/Input"

const Login = () =>{
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
            <Form>
                <h3>Login</h3>
                <Input placeholder='Nome'/>
                <Input placeholder='Senha' type='password'/>
                <Button>Logar</Button>
                <p>Crie sua conta para saborear muitas delicias e matar sua fome</p>
            </Form>
        </Container>
    )
}

export default Login    