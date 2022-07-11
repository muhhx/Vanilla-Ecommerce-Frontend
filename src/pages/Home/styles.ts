import styled from "styled-components";

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
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 90%;
  display: grid;
  grid-template-columns: 0.7fr 0.2fr 0.6fr 0.6fr 0.1fr 0.7fr;
  grid-template-rows: 1fr 0.2fr 1fr 0.2fr 0.2fr 1fr 0.2fr;
  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 88%;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(black, transparent, transparent, black);
  position: absolute;
`;

export const Image1 = styled.div`
  background-color: black;
  grid-column: 2 / 6;
  grid-row: 1 / 8;
  display: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 700px) {
    grid-column: 1 / 7;
  }
`;

export const Image2 = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 7;
  overflow: hidden;
  display: flex;
  justify-content: end;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Image3 = styled.div`
  grid-column: 5 / 7;
  grid-row: 2 / 5;
  overflow: hidden;
  display: flex;
  justify-content: start;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 120%;
`;

export const Title = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;

  @media only screen and (max-width: 900px) {
    height: 95%;
    flex-direction: column;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleText = styled.h1`
  grid-row: 1 / 2;
  font-family: ${({ theme }) => theme.font.fontSecundary};
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 500;
  font-size: 10vw;
  line-height: 0.9;
  letter-spacing: -2.5vw;

  @media only screen and (max-width: 900px) {
    letter-spacing: -10px;
    font-size: 84px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 400;
  font-size: 0.8vw;
  margin-left: 4px;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
    font-size: 12px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 3vw;
  font-weight: 400;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Error = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;
