import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 6.5rem);
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Quantity = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 50px 0px;
  color: ${({ theme }) => theme.color.backgroundMain};
  background-color: ${({ theme }) => theme.color.blackWhite};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CheckoutSticky = styled.div`
  width: 100%;
  height: 0px;
  position: sticky;
  bottom: 0;
`;

export const CheckoutPanel = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.color.reverseColor};
  position: absolute;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckoutSpan = styled.span`
  color: white;
  font-size: 12px;
`;

export const Checkout = styled.button`
  background-color: transparent;
  border: solid 1px white;
  padding: 5px 20px;
  font-size: 10px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease-in;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.color.fontOrange};
    border-color: ${({ theme }) => theme.color.fontOrange};
  }
`;
