import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: var(--grey-600);
  }
  span {
    color: var(--color-secondary);
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    max-width: 400px;
  }
  p {
    font-size: 14px;
    color: var(--grey-300);
  }
`;
export const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #209653;
    font-size: 20px;
    background-color: red;
    padding: 10px;
    border-radius: 5px;
    background-color: #e9f7ef;
  }
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  width: 310px;

  margin: 20px;

  p {
    font-size: 12px;
    color: var(--grey-300);
  }
  h3 {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
    border-radius: 5px;
    border: 2px solid var(--grey-100);
    box-shadow: 5px 5px 10px var(--grey-100);
  }
  input {
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 2s;
    max-width: 300px;
    :focus {
      border-color: var(--grey-600);
    }
    @media screen and (min-width: 768px) {
      max-width: 452px;
    }
  }
  div {
    width: 100%;
    p {
      height: 10px;
      margin: 6px;
      color: var(--negative);
    }
  }
  div:nth-child(3) {
    margin-bottom: 10px;
  }
`;
