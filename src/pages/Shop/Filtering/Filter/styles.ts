import styled from "styled-components";

interface IProps {
  isClicked: boolean;
}

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const FilterName = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 8px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
`;

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-left: 55px;
  flex-wrap: wrap;

  @media only screen and (max-width: 400px) {
    padding-left: 0px;
  }
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
