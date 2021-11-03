import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffff;
  margin: 0 auto;
  width: 500px;

  div {
    background-color: white;
    display: flex;
    img {
      width: 100px;
    }
    p {
      text-align: center;
      width: 150px;
      color: var(--grey-300);
    }
    svg {
      cursor: pointer;
      color: var(--grey-300);
    }
  }
  .action-container {
    width: 99.5%;
    background-color: var(--success);
    color: white;
    svg {
      color: white;
    }
  }
  .item-cart {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: -60%;
  }
`;

export const Total = styled.div`
  h2 {
    color: var(--grey-300);
  }
`;

export const CartContainer = styled.div`
  overflow: auto;
  height: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    position: fixed;
  }
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
