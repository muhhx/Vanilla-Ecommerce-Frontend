import { useSelector } from "react-redux";
import { selectCollections } from "../../../features/collectionSlice";

import Spinner from "../../../components/Spinner";
import Create from "./Create";
import Panel from "./Panel";
import * as C from "./styles";

export default function Collection() {
  const { collections, status, error } = useSelector(selectCollections);

  return (
    <>
      <C.Container>
        <C.Wrapper>
          <C.Title>Criar Collection</C.Title>
          <Create />
        </C.Wrapper>

        {status === "pending" && (
          <C.Wrapper>
            <Spinner />
          </C.Wrapper>
        )}

        {status === "rejected" && (
          <C.Wrapper>
            <C.Error>{error}</C.Error>
          </C.Wrapper>
        )}
      </C.Container>

      {status === "success" && (
        <C.Wrapper>
          <C.Title>Gerenciar Coleções</C.Title>
          {collections.map((collection) => (
            <Panel key={collection._id} collection={collection} />
          ))}
        </C.Wrapper>
      )}
    </>
  );
}
