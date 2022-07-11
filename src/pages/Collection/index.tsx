import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCollections } from "../../features/collectionSlice";
import { useParams } from "react-router-dom";
import ICollection from "../../types/collection.types";
import Spinner from "../../components/Spinner";
import Products from "./Products";
import * as C from "./styles";

export default function Collection() {
  const [collection, setCollection] = useState<ICollection | null>(null);
  const { id } = useParams();
  const { collections } = useSelector(selectCollections);

  useEffect(() => {
    setCollection(
      collections.filter((collection) => collection.season === id)[0]
    );
  }, [id, collections]);

  return (
    <C.Section>
      <C.Container>
        {!collection && <Spinner />}

        {collection && (
          <>
            <C.Wrapper>
              <C.Title>{collection.name}</C.Title>
              <C.Description>{collection.description}</C.Description>
              <C.Credits>
                created by {collection.author} @{collection.season}.
              </C.Credits>
            </C.Wrapper>

            <C.Wrapper>
              <C.Description>Look Book da Coleção</C.Description>
              <C.ImagesContainer>
                {collection.lookbook.map((image) => (
                  <C.Image key={image.key} image={image.url} />
                ))}
              </C.ImagesContainer>
            </C.Wrapper>

            <C.Wrapper>
              <C.Description>Produtos da Coleção</C.Description>
              <Products collection={collection} />
            </C.Wrapper>
          </>
        )}
      </C.Container>
    </C.Section>
  );
}
