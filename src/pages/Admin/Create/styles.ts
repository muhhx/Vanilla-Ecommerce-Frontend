import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: ${(props: IProps) => (!props.isSelected ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Option = styled.button`
  background-color: ${(props: IProps) =>
    !props.isSelected
      ? ({ theme }) => theme.color.fontMain
      : ({ theme }) => theme.color.fontOrange};
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const OptionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OptionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionTitle = styled.span`
  font-family: inherit;
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 12px;
  font-weight: 600;
`;

export const DeleteOption = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-family: inherit;
  color: ${({ theme }) => theme.color.fontOrange};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;

export const Button = styled.button`
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

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }
`;
