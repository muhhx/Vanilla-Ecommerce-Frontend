import { useState } from "react";
import ICollection from "../../../../../types/collection.types";
import useDeleteCollection from "../../../../../hooks/useDeleteCollection";
import useUpdateCollection from "../../../../../hooks/useUpdateCollection";

import RadioInput from "../../../../../components/RadioInput";
import Input from "../../../../../components/Input";
import Spinner from "../../../../../components/Spinner";
import * as C from "./styles";

export default function Edit({ collection }: { collection: ICollection }) {
  const [delStatus, delError, deleteCollection] = useDeleteCollection();
  const [upStatus, upError, updateCollection] = useUpdateCollection();

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newSeason, setNewSeason] = useState("");
  const [displayHome, setDisplayHome] = useState(collection.homePage);
  const [cover, setCover] = useState<string[]>(collection.cover);

  const handleSelectCover = (url: string) => {
    if (cover.includes(url)) {
      setCover(cover.filter((image) => image !== url));
    } else if (cover.length >= 3) {
      return;
    } else {
      setCover([...cover, url]);
    }
  };

  const handleUpdateCollection = () => {
    if (cover.length < 3 || cover.length > 3) return;
    updateCollection(collection._id, {
      name: newName || collection.name,
      description: newDescription || collection.description,
      author: newAuthor || collection.author,
      season: newSeason || collection.season,
      cover,
      homePage: displayHome,
    });
  };

  const handleDeleteCollection = () => {
    deleteCollection(collection._id);
  };

  return (
    <C.Container>
      {delStatus === "failure" && <C.Error>{delError}</C.Error>}
      {upStatus === "failure" && <C.Error>{upError}</C.Error>}
      {upStatus === "success" && (
        <C.Error>Coleção atualizada com sucesso!</C.Error>
      )}

      <C.Wrapper>
        <Input
          inputType="text"
          label="New Collection Name"
          state={newName}
          setState={setNewName}
          validState={true}
        />

        <Input
          inputType="text"
          label="New Description"
          state={newDescription}
          setState={setNewDescription}
          validState={true}
        />
      </C.Wrapper>

      <C.Wrapper>
        <Input
          inputType="text"
          label="New Author Name"
          state={newAuthor}
          setState={setNewAuthor}
          validState={true}
        />

        <Input
          inputType="text"
          label="New Season"
          state={newSeason}
          setState={setNewSeason}
          validState={true}
        />
      </C.Wrapper>

      <RadioInput
        name="Display Home"
        state={displayHome}
        setState={setDisplayHome}
        labelTrue="Sim"
        labelFalse="Não"
      />

      <C.ImagesContainer>
        <C.Label>Selecione uma imagem de capa</C.Label>
        <C.ImageWrapper>
          {collection.lookbook.map((image) => (
            <C.Image
              key={image.key}
              image={image.url}
              isSelected={cover.includes(image.url)}
              onClick={() => handleSelectCover(image.url)}
            />
          ))}
        </C.ImageWrapper>
      </C.ImagesContainer>

      <C.Wrapper>
        <C.EditButton
          onClick={handleUpdateCollection}
          disabled={
            cover.length < 3 || cover.length > 3 || upStatus === "loading"
              ? true
              : false
          }
        >
          {upStatus === "loading" ? <Spinner /> : "Salvar Alterações"}
        </C.EditButton>

        <C.DeleteButton
          onClick={handleDeleteCollection}
          disabled={delStatus === "loading"}
        >
          {delStatus === "loading" ? <Spinner /> : "Deletar Coleção"}
        </C.DeleteButton>
      </C.Wrapper>
    </C.Container>
  );
}
