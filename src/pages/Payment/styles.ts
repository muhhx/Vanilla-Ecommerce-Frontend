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
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 200;
  font-size: 36px;
  line-height: 1;
`;
