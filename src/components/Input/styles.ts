import styled from "styled-components";

interface IProps {
  image: string;
}

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  height: 60px;
  position: relative;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  outline: none;
  background-color: white;
  padding: 6px 10px;
  padding-right: 50px;

  &:focus {
    border-left: solid 4px ${({ theme }) => theme.color.fontMain};
    padding-left: 6px;
  }
`;

export const Icons = styled.div`
  position: absolute;
  top: 31px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Error = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100px;
`;

export const View = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100px;
  cursor: pointer;
`;
