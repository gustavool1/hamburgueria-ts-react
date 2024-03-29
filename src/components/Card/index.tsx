import { Container, ImageContainer, InfoContainer }from './style'
import Button from '../Buttons'
import { useContext } from 'react';
import { CartContext } from '../../Providers/Cart';
import { toast } from 'react-toastify';
interface CardProps{
    MenuItem:{   
        title?:string,
        price?:number,
        type?:string,
        image?:string,
        userId?:number
    }
}
const Card = ({MenuItem}:CardProps) => {
    const { addToCart } = useContext(CartContext)
    const handleClick = () =>{
        addToCart(MenuItem)
    }
    return(
    <Container>
        <ImageContainer>
            <img src={MenuItem.image} alt={MenuItem.title}/>
        </ImageContainer>
        <InfoContainer>
            <h3>{MenuItem.title}</h3>
            <p>{MenuItem.type}</p>
            <h4>R${MenuItem.price?.toFixed(2)}</h4>
            { localStorage.getItem('token') ?<Button onClick={()=> handleClick()}>Adicionar</Button>: <Button size onClick={()=> toast.warning('Necessário logar para adicionar um item ao carrinho')}>Adicionar</Button>}
           
        </InfoContainer>
    </Container>
    ) 
  };

  
  export default Card;
  