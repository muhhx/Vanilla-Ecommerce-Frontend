import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Select = styled.select`
  width: 100%;
  background-color: white;
  border: none;
  padding: 6px 10px;
  outline: none;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  padding-right: 50px;

  &:focus {
    border-left: solid 4px ${({ theme }) => theme.color.fontMain};
    padding-left: 6px;
  }
`;

export const Option = styled.option`
  width: 100%;
  background-color: white;
  border: none;
  padding: 6px 10px;
  outline: none;
  font-family: "Jost", sans-serif;
  font-weight: 400;
`;
