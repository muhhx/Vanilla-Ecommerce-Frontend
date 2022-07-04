import styled from "styled-components";

export const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`;

export const EditButton = styled.button`
  padding: 7px 20px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  width: 200px;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  margin-bottom: 50px;
`;
