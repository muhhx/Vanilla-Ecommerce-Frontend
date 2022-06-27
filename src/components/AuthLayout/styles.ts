import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundMain};
`;
