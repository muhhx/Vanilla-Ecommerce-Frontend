import { useSelector } from "react-redux";
import { selectCollections } from "../../features/collectionSlice";
import { Link } from "react-router-dom";
import * as C from "./styles";

export default function Menu() {
  const { collections } = useSelector(selectCollections);

  return (
    <C.Sticky>
      <C.Section>
        <C.Container>
          <C.Navigation>
            <Link to={"/shop"}>
              <C.Button>SHOP ALL</C.Button>
            </Link>
            {collections.map((collection) => (
              <Link to={`/collection/${collection.season}`}>
                <C.Button>{collection.season.toUpperCase()} COL.</C.Button>
              </Link>
            ))}
          </C.Navigation>
          <C.Footer>
            <C.Span href="https://www.linkedin.com/in/muhhx/" target="_blank">
              LinkedIn
            </C.Span>
            <C.Span>created by Murilo Santos</C.Span>
            <C.Span href="https://github.com/muhhx" target="_blank">
              GitHub
            </C.Span>
          </C.Footer>
        </C.Container>
      </C.Section>
    </C.Sticky>
  );
}
