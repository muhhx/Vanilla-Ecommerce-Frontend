import styled from "styled-components";

export const Sticky = styled.div`
  width: 100%;
  height: 0;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.color.backgroundMain === "#F5F1EC"
      ? "rgba(228, 219, 217, .8)"
      : "rgba(27, 27, 27, .8)"};
  backdrop-filter: blur(30px);
`;

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.font.fontTerciary};
  font-style: italic;
  border: none;
  background-color: transparent;
  font-size: 48px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.color.fontOrange};
  }
  @media only screen and (max-width: 450px) {
    font-size: 10vw;
  }
`;

export const Span = styled.a`
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;
