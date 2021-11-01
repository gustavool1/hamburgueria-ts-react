import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 91vh;
  position: absolute;
  background-color: rgb(242, 242, 242, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CloseModal = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  svg {
    font-size: 30px;
  }
`;
export const CartContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  opacity: 1;
  color: white;
  border-radius: 5px;

  div {
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--success);
  }
`;
