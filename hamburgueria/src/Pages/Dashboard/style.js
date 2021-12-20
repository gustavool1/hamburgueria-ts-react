import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  
`;
export const MenuContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:768px){
    margin-top: 5%;
  }
`;

export const CircularContainer = styled.div`
  height:90vh;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`