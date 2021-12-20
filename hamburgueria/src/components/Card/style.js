import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid var(--grey-100);
  padding: 10px;
  width: 320px;
  height: 382px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 1%;
  transition:1s;
  :hover{
    border: 2px solid var(--color-primary);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: var(--grey-100);
  text-align: center;
  height: 167px;
  img {
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  p {
    color: var(--grey-300);
  }
  h4 {
    color: var(--success);
  }
`;
