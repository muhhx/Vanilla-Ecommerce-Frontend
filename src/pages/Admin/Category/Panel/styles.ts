import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-end;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const EditButton = styled.button`
  padding: 7px 20px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  width: 240px;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.color.reverseColor};
  cursor: pointer;
  transition: 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  padding: 7px 20px;
  width: 240px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.color.fontOrange};
  cursor: pointer;
  transition: 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.fontOrangeHover};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
`;
