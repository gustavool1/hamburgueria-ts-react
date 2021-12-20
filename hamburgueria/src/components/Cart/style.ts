import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content:center;
  @media screen and (max-width:768px){
    width: 100%;
  }
  
`;

export const Total = styled.section`

  border-top: 2px solid var(--grey-100);
  h2, p {
    color: var(--grey-300);
  }
  border-radius: 0px 0px 5px 5px;
  width: 500px;
  background: white;
  display: flex;
  padding: 10px;
  align-items:center;
  justify-content:space-between;
  @media screen and (max-width:768px){
    width: 100%;
  } 
`;

export const CartContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (max-width: 768px) {
    position:fixed;
    margin-top:-50%;
    width: 85%;
  }
`;

export const InfoContainer = styled.section`
    display: flex;
    justify-content:space-between;
    align-items:center;
    background: var(--color-primary);
    height: 54px;
    padding: 10px;
    color: white;
    width: 500px;
    border-radius:5px 5px 0px 0px;
    svg{
      font-size:30px;
      cursor:pointer;
    }

    @media screen and (max-width:768px){
    width: 100%;
    } 
  }
`

export const ItensContainer = styled.section`
  width: 100%;
  padding: 10px;
  background-color:white;
  width: 500px;
  @media screen and (max-width:768px){
    width: 100%;
    } 
  
`

export const Item = styled.section` 
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  p{
    color: black;
  }
  svg{
    color: var(--grey-100);
    cursor: pointer;
    :hover{
      color:var(--grey-300);
    }
  }
  img {
      width: 100px;
    }
`

export const Empty = styled.section` 
  color: var(--grey-300);
  text-align:center;
`
