import styled from "styled-components";

interface IProps {
  isMenu: boolean;
}

export const Section = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;
  justify-content: end;
  flex-wrap: wrap;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;
  justify-content: start;
  flex-wrap: wrap;
`;

export const Menu = styled.button`
  width: 2.5rem;
  height: 0.8rem;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.color.fontMain};
  border-top: solid 1px ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
  background-color: transparent;
`;

export const Button = styled.button`
  width: 1rem;
  aspect-ratio: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 100%;
`;

export const LogoWrapper = styled.div`
  @media only screen and (max-width: 290px) {
    display: none;
  }
`;
