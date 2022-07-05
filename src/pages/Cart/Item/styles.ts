import styled from "styled-components";

interface IProps {
  url: string;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    height: 400px;
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 40%;
  background-image: url(${(props: IProps) => props.url});
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: whitesmoke;

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BasicInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Name = styled.h1`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.fontMain};
  line-height: 1;
`;

export const Span = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const FunctionalInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Price = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Operations = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.color.fontMain};
  padding: 5px 0px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
`;

export const Delete = styled.button`
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-family: "Jost", sans-serif;
  color: ${({ theme }) => theme.color.fontMain};
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
  transition: 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.color.fontOrange};
  }
`;
