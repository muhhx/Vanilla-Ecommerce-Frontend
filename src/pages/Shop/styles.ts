import styled from "styled-components";

interface IProps {
  isClicked?: boolean;
}

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-family: ${({ theme }) => theme.font.fontSecundary};
  text-transform: uppercase;
  font-size: min(25vw, 84px);
  font-weight: 500;
  letter-spacing: max(-10px, -3vw);
  line-height: 0.8;
  text-align: center;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;

export const Products = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
