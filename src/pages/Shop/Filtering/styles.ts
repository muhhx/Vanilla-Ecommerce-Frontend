import styled from "styled-components";

interface IProps {
  isClicked: boolean;
}

export const Control = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 300px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media only screen and (max-width: 300px) {
    width: 100%;
    border-bottom: solid 0.5px ${({ theme }) => theme.color.fontMain};
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;

export const Option = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props: IProps) =>
    props.isClicked === true
      ? ({ theme }) => theme.color.fontOrange
      : ({ theme }) => theme.color.fontMain};
  font-size: 12px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-top: solid 1px ${({ theme }) => theme.color.fontMain};
  border-bottom: solid 1px ${({ theme }) => theme.color.fontMain};
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

export const Clear = styled.button`
  padding: 7px 20px;
  width: 100%;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.color.reverseColor};
  cursor: pointer;
  transition: 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }
`;
