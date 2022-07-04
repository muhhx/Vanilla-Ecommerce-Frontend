import styled from "styled-components";

interface IProps {
  isSelected?: boolean;
  url?: string;
  discount?: boolean;
  color?: string;
}

export const Section = styled.section`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.backgroundMain};

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.fontOrange};
  text-align: center;
  font-size: 1.2rem;
`;

export const ImagesContainer = styled.div`
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  background-image: url(${(props: IProps) => props.url});
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f5f5f7;
`;

export const InformationContainer = styled.div`
  position: sticky;
  top: 0;
  height: calc(100vh - 6.5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    position: initial;
    height: auto;
    padding: 50px 0px;
  }
`;

export const InformationWrapper = styled.div`
  height: 100%;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.color.fontOrange};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
  color: ${({ theme }) => theme.color.fontMain};
  @media only screen and (max-width: 250px) {
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Price = styled.h1`
  color: ${({ theme }) => theme.color.fontMain};
  font-size: ${(props: IProps) => (props.discount === true ? "12px" : "18px")};
  text-decoration: ${(props: IProps) =>
    props.discount === true ? "line-through" : "initial"};
  font-weight: 400;
`;

export const Discount = styled.h1`
  color: ${({ theme }) => theme.color.fontOrange};
  font-size: 18px;
  font-weight: 400;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const OptionName = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontMain};
`;

export const Option = styled.button`
  background-color: transparent;
  color: ${(props: IProps) =>
    props.isSelected === true
      ? "#ff670f"
      : ({ theme }) => theme.color.fontMain};
  border: none;
  font-size: 12px;
  font-weight: 400;
  font-family: "Jost", sans-serif;
  cursor: pointer;
`;

export const ColorBorder = styled.button`
  width: 20px;
  aspect-ratio: 1;
  padding: 2px;
  border: none;
  border-bottom: ${(props: IProps) =>
    props.isSelected === true ? "solid 1px #ff670f" : "none"};
  cursor: pointer;
  background-color: transparent;
`;

export const Color = styled.div`
  background-color: ${(props: IProps) => props.color};
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 5px 0px;
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

  &:hover {
    background-color: ${({ theme }) => theme.color.reverseHover};
  }
`;

export const Esgotado = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 1.2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.reverseColor};
`;
