import * as C from "./styles";

export default function NotFound() {
  return (
    <C.Section>
      <C.Container>
        <C.Wrapper>
          <C.Title>404</C.Title>
          <C.Error>Error</C.Error>
        </C.Wrapper>
        <C.Wrapper>
          <C.WrapperMessage>
            <C.Message>{`Sorry :(`}</C.Message>
            <C.Message>Page Not Found</C.Message>
          </C.WrapperMessage>
          <C.WrapperMessage>
            <C.Button to="/">HOME PAGE</C.Button>
          </C.WrapperMessage>
        </C.Wrapper>
      </C.Container>
    </C.Section>
  );
}
