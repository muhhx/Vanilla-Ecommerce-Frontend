import styled from "styled-components";

interface IProps {
  image?: string;
  isSelected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin: 20px 0px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  max-width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
`;

export const Image = styled.button`
  height: 100%;
  aspect-ratio: 1;
  background-color: rgb(245, 245, 247);
  background-image: url(${(props: IProps) => props.image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: ${(props: IProps) =>
    !props.isSelected ? "none" : `solid 3px orange`};
  cursor: pointer;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 1.2rem;
`;

export const EditButton = styled.button`
  padding: 7px 20px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  width: 100%;
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

export const DeleteButton = styled.button`
  padding: 7px 20px;
  width: 100%;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.color.fontOrange};
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
    background-color: ${({ theme }) => theme.color.fontOrangeHover};
  }
`;

export const Error = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;
