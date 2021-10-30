import styled from "styled-components";

export const ButtonDefault = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: white;
  font-size: 16px;
  padding: 15px;
  width: 100%;

  border-radius: 5px;
  transition: 1s;
  cursor: pointer;
  :hover {
    background-color: rgba(147, 215, 175, 1);
  }
  @media screen and (min-width: 768px) {
    max-width: 452px;
  }
`;

export const ButtonGrey = styled.button`
  background-color: var(--grey-100);
  border: none;
  font-size: 16px;
  padding: 10px;
  width: 100%;

  color: white;
  border-radius: 5px;
  transition: 1s;
  cursor: pointer;
  :hover {
    background-color: var(--grey-300);
  }
  @media screen and (min-width: 768px) {
    max-width: 452px;
  }
`;
