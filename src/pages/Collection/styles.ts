import styled from "styled-components";

interface IProps {
  image: string;
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
  margin: 50px 0px;
  gap: 150px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.fontSecundary};
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 500;
  font-size: 100px;
  line-height: 0.9;
  letter-spacing: -9px;
  text-transform: uppercase;
  text-align: center;
  word-wrap: break-word;

  @media only screen and (max-width: 900px) {
    letter-spacing: -2px;
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.font.fontMain};
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 10px;
  text-align: center;

  @media only screen and (max-width: 650px) {
    text-align: justify;
  }
`;

export const Credits = styled.p`
  font-family: ${({ theme }) => theme.font.fontMain};
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 10px;
  text-align: center;
  font-weight: 600;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: cover;
`;
