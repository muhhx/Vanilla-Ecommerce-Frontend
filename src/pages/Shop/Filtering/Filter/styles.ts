import styled from "styled-components";

interface IProps {
  isClicked: boolean;
}

export const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const FilterName = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 8px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
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
