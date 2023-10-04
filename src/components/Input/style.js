import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputContainer = styled.input`
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
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
`;
