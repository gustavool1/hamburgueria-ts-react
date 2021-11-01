import { Container, ImageContainer, InfoContainer }from './style'
import Button from '../Buttons'
import { useContext } from 'react';
import { CartContext } from '../../Providers/Cart';
import { AccountContext } from '../../Providers/Account';
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
    const { isAuthenticated } = useContext(AccountContext)
    const { addToCart } = useContext(CartContext)
    return(
    <Container>
        <ImageContainer>
            <img src={MenuItem.image} alt={MenuItem.title}/>
        </ImageContainer>
        <InfoContainer>
            <h3>{MenuItem.title}</h3>
            <p>{MenuItem.type}</p>
            <h4>R${MenuItem.price}0</h4>
            { isAuthenticated ?
            (
                <Button onClick={()=> addToCart(MenuItem)}>Adicionar</Button>
            )
            :
            (
                <Button size>Adicionar</Button>
            )
            }
        </InfoContainer>
    </Container>
    ) 
  };

  
  export default Card;
  