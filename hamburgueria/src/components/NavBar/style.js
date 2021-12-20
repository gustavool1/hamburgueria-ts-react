import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: var(--grey-100);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h1 {
    color: var(--grey-600);
    margin: 0px;
    span {
      color: var(--color-secondary);
      font-size: 20px;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 10%;
  margin-left: 5%;
  @media screen and (max-width: 768px) {
    width: 100%;
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;
export const InteractionContainer = styled.div`
  width: 80%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    svg {
      background-color: var(--success);
      cursor: pointer;
      font-size: 24px;
      margin-top: -8px;
      padding: 5px;
      border-radius: 5px;
    }
  }
  input {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 50%;
    background: #f1f1f1;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border: 1px solid var(--grey-300);
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  button {
    float: left;
    width: 20%;
    padding: 10px;
    color: white;
    font-size: 17px;
    height: 42px;
    border: 1px solid var(--grey-300);
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    margin-bottom:10px;
  }
`;

export const IconsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  svg {
    font-size: 35px;
    width: 100%;
    cursor: pointer;
    color: var(--grey-300);
    transition: 1s;
    :hover {
      color: #f2f9f8;
    }
  }
  button {
    width: 50px;
    border: none;
    background-color: transparent;
    margin: 2px;
  }
  a {
    color: var(--grey-300);
    text-decoration: none;
    transition: 1s;
    :hover {
      color: white;
    }
  }
  div{
    color: red;
    position:relative;
    top: -48px;
    left:20px;
    background: var(--color-primary);
    border-radius:20%;
    span{
      color: white;
    }
  }
`;
