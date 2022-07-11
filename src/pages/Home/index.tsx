import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollections } from "../../features/collectionSlice";
import ICollection from "../../types/collection.types";

import * as C from "./styles";
import Spinner from "../../components/Spinner";

export default function Home() {
  const navigate = useNavigate();
  const [homeCollection, setHomeCollection] = useState<null | ICollection>(
    null
  );
  const { collections, status, error } = useSelector(selectCollections);

  useEffect(() => {
    setHomeCollection(
      collections.filter((collection) => collection.homePage === true)[0]
    );
  }, [collections]);

  return (
    <C.Section>
      {status === "pending" && <Spinner />}

      {status === "rejected" && <C.Error>{error}</C.Error>}

      {status === "success" && homeCollection && (
        <C.Container
          onClick={() => navigate(`/collection/${homeCollection.season}`)}
        >
          <C.Title>
            <C.Wrapper>
              <C.TitleText>LOOK</C.TitleText>
              <C.SubTitle>{homeCollection.name}</C.SubTitle>
            </C.Wrapper>
            <C.Span>{homeCollection.season}</C.Span>
            <C.TitleText>BOOK</C.TitleText>
          </C.Title>
          <C.ImageWrapper>
            <C.Image1>
              <C.Overlay />
              <C.Image src={homeCollection.cover[0]} alt="Cover Image" />
            </C.Image1>
            <C.Image2>
              <C.Image src={homeCollection.cover[1]} alt="Cover Image" />
            </C.Image2>
            <C.Image3>
              <C.Image src={homeCollection.cover[2]} alt="Cover Image" />
            </C.Image3>
          </C.ImageWrapper>
        </C.Container>
      )}
    </C.Section>
  );
}
