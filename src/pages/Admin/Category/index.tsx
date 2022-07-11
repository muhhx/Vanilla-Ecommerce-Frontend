import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";
import { selectCategories } from "../../../features/categorySlice";
import Panel from "./Panel";
import Input from "../../../components/Input";
import useCreateCategory from "../../../hooks/useCreateCategory";
import * as C from "./styles";

export default function Category() {
  const { categories, error, status } = useSelector(selectCategories);
  const [catStatus, catError, createCategory] = useCreateCategory();
  const [name, setName] = useState("");

  const handleCreateCategory = () => {
    createCategory(name);
    setName("");
  };

  return (
    <C.Container>
      {status === "pending" && <Spinner />}

      {status === "rejected" && <span>{error}</span>}

      {status === "success" && (
        <>
          <C.Divider>
            <C.Title>Criar Categorias</C.Title>
            <C.Wrapper>
              <Input
                inputType="text"
                label="Nova categoria"
                state={name}
                setState={setName}
                validState={true}
              />
              <C.EditButton onClick={handleCreateCategory}>
                {catStatus === "loading" ? <Spinner /> : "Criar"}
              </C.EditButton>
            </C.Wrapper>
          </C.Divider>

          <C.Divider>
            <C.Title>Editar Categorias</C.Title>
            {categories.map((category, key) => (
              <Panel key={key} category={category} />
            ))}
          </C.Divider>
        </>
      )}
    </C.Container>
  );
}
