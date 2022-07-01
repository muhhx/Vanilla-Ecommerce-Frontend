import styled from "styled-components";

export const Wrapper = styled.div`
  width: 138px;
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
  border: none;
  width: 100%;
  cursor: pointer;
  height: 100%;
  margin-bottom: 2px;
`;
