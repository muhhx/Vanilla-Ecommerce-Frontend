import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-family: ${({ theme }) => theme.font.fontSecundary};
  text-transform: uppercase;
  font-size: min(25vw, 84px);
  font-weight: 500;
  letter-spacing: max(-10px, -3vw);
  line-height: 0.8;
`;

export const Button = styled.button`
  width: 100%;
  padding: 7px 0px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.reverseColor};
  cursor: pointer;
  transition: 0.2s ease-in;

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }
`;

export const Panel = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PanelText = styled.li`
  color: ${({ theme }) => theme.color.fontMain};
  margin-left: 20px;
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Option = styled(Link)`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;
