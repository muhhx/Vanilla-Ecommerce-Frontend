import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 6.5rem);
  background-color: ${({ theme }) => theme.color.backgroundMain};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Header = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
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

export const Options = styled.div`
  display: flex;
  column-gap: 50px;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 670px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Option = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: ${(props: IProps) =>
    props.isSelected === true
      ? ({ theme }) => theme.color.fontOrange
      : ({ theme }) => theme.color.fontMain};
  font-family: "Jost", sans-serif;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 670px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    border-bottom: solid 0.5px ${({ theme }) => theme.color.fontMain};
  }
`;
