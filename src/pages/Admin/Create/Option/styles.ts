import styled from "styled-components";

interface IProps {
  image?: string;
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Sizes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Size = styled.span`
  color: ${({ theme }) => theme.color.fontOrange};
`;

export const Button = styled.button`
  width: 100%;
  padding: 7px 0px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.reverseColor};
  cursor: pointer;
  transition: 0.2s ease-in;

  &:disabled {
    background-color: gray;
    cursor: initial;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }
`;

export const Remove = styled.button`
  border: none;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
`;

export const Upload = styled.label`
  width: 100%;
  padding: 7px 0px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.reverseColor};
  cursor: pointer;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: cover;
  background-color: black;
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
`;
