import styled from "styled-components";

interface IProps {
  image: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 12px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ImageInput = styled.input`
  font-family: inherit;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-color: rgb(245, 245, 247);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
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
