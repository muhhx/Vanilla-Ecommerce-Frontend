import styled from "styled-components";

interface IProps {
  image: string;
}

export const Divider = styled.div`
  width: 100%;
  padding-top: 20px;
  margin-top: 20px;
  border-top: solid 1px ${({ theme }) => theme.color.fontMain};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  height: 100px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    justify-content: start;
    gap: 20px;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;

export const Data = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Thumb = styled.div`
  height: 100px;
  width: 100%;
  max-width: 200px;
  background-color: rgb(245, 245, 247);
  background-image: url(${(props: IProps) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    max-width: initial;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px 0px;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.fontMain};
  text-align: start;
  max-height: 30px;
  overflow: hidden;
`;

export const Actions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 25px;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const Button = styled.button`
  padding: 7px 20px;
  min-width: 100px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: white;
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

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
