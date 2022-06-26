import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.png";
import * as C from "./styles";

export default function Home() {
  return (
    <C.Section>
      <C.Container>
        <C.Title>
          <C.Wrapper>
            <C.TitleText>LOOK</C.TitleText>
            <C.SubTitle>Burberry Summer Collection.</C.SubTitle>
          </C.Wrapper>
          <C.Span>AW21</C.Span>
          <C.TitleText>BOOK</C.TitleText>
        </C.Title>
        <C.ImageWrapper>
          <C.Image1>
            <C.Overlay />
            <C.Image src={image1} alt="Teste" />
          </C.Image1>
          <C.Image2>
            <C.Image src={image3} alt="Teste" />
          </C.Image2>
          <C.Image3>
            <C.Image src={image2} alt="Teste" />
          </C.Image3>
        </C.ImageWrapper>
      </C.Container>
    </C.Section>
  );
}
