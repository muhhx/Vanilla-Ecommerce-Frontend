import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);
  background-color: ${({ theme }) => theme.color.backgroundMain};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 200;
  font-size: 25vw;
  line-height: 1;
  letter-spacing: -1vw;
  transform: translateX(-5px);

  @media only screen and (max-width: 500px) {
    font-size: 50vw;
  }
`;

export const Error = styled.span`
  font-family: ${({ theme }) => theme.font.fontTerciary};
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 500;
  position: absolute;
  font-size: 2vw;

  @media only screen and (max-width: 500px) {
    font-size: 4vw;
  }
`;

export const Message = styled.span`
  font-family: ${({ theme }) => theme.font.fontTerciary};
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2vw;
  font-weight: 500;

  @media only screen and (max-width: 500px) {
    font-size: 2.4vw;
  }
`;

export const WrapperMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled(Link)`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1vw;
  cursor: pointer;
  text-decoration: underline;
  font-family: "Jost", sans-serif;
  transition: 0.2s ease-in;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.fontOrange};
  }

  @media only screen and (max-width: 500px) {
    font-size: 2vw;
  }
`;
