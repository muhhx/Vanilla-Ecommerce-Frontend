import styled from "styled-components";

type Props = {
  url?: string;
  orderStatus?: boolean;
};

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

export const Span = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Frame = styled.div`
  min-width: 250px;
  height: ${(props: Props) =>
    props.orderStatus === false ? "300px" : "400px"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width: 400px) {
    min-width: 90vw;
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props: Props) => props.url});
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: whitesmoke;
`;

export const Description = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;

export const Name = styled.span`
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Delete = styled.button`
  color: ${({ theme }) => theme.color.fontOrange};
  border: none;
  font-size: 10px;
  font-family: "Jost", sans-serif;
  line-height: 1;
  background-color: transparent;
  cursor: pointer;
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 300;
  text-transform: uppercase;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
