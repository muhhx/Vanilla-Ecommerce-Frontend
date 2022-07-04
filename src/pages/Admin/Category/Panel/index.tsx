import { useState } from "react";
import ICategory from "../../../../types/category.types";
import useDeleteCategory from "../../../../hooks/useDeleteCategory";
import useUpdateCategory from "../../../../hooks/useUpdateCategory";
import Input from "../../../../components/Input";
import * as C from "./styles";
import Spinner from "../../../../components/Spinner";

export default function Panel({ category }: { category: ICategory }) {
  const [delStatus, delError, deleteCategory] = useDeleteCategory();
  const [upStatus, upError, updateCategory] = useUpdateCategory();
  const [newName, setNewName] = useState("");

  const handleUpdateName = () => {
    updateCategory(category._id, newName);
    setNewName("");
  };

  return (
    <C.Container>
      {delStatus === "failure" && <C.Error>{delError}</C.Error>}

      <C.Wrapper>
        <Input
          inputType="text"
          label={`${category.name} - ${category._id}`}
          state={newName}
          setState={setNewName}
          validState={true}
        />
        <C.EditButton onClick={handleUpdateName}>
          {upStatus === "loading" ? <Spinner /> : "Atualizar nome"}
        </C.EditButton>
        <C.DeleteButton onClick={() => deleteCategory(category._id)}>
          {delStatus === "loading" ? <Spinner /> : "Deletar categoria"}
        </C.DeleteButton>
      </C.Wrapper>
    </C.Container>
  );
}
