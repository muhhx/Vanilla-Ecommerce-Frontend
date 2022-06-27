import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.color.reverseColor};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled(Link)`
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme.color.fontMain};
  font-family: "Jost", sans-serif;
  font-size: 12px;
`;
