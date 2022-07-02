import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 100px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
  background-color: red;

  &:focus {
    background-color: red;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;
