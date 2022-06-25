import { Link } from "react-router-dom";
import * as C from "./styles";

export default function Menu() {
  return (
    <C.Sticky>
      <C.Section>
        <C.Container>
          <C.Navigation>
            <Link to={"/shop"}>
              <C.Button>SHOP</C.Button>
            </Link>
            <C.Button>COLLECTIONS</C.Button>
            <C.Button>EXCLUSIVE</C.Button>
            <C.Button>VANILLA WORLD</C.Button>
          </C.Navigation>
          <C.Footer>
            <C.Span>Termos</C.Span>
            <C.Span>Instagram</C.Span>
            <C.Span>Contato</C.Span>
          </C.Footer>
        </C.Container>
      </C.Section>
    </C.Sticky>
  );
}
