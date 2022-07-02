import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;
