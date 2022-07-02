import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  height: 60px;
  position: relative;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  outline: none;
  background-color: white;
  padding: 6px 10px;
  padding-right: 50px;

  &:focus {
    border-left: solid 4px ${({ theme }) => theme.color.fontMain};
    padding-left: 6px;
  }
`;
