import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../../../features/categorySlice";
import { selectCollections } from "../../../../../features/collectionSlice";

import useDeleteProduct from "../../../../../hooks/useDeleteProduct";
import useUpdateProduct from "../../../../../hooks/useUpdateProduct";
import RadioInput from "../../../../../components/RadioInput";
import IProduct from "../../../../../types/product.types";
import Spinner from "../../../../../components/Spinner";
import Select from "../../../../../components/Select";
import Input from "../../../../../components/Input";
import * as C from "./styles";

export default function Edit({ product }: { product: IProduct }) {
  const { categories } = useSelector(selectCategories);
  const collectionState = useSelector(selectCollections);

  const collections = collectionState.collections.map((collection) => {
    return {
      name: collection.season,
      _id: collection._id,
    };
  });

  const [deleteStatus, deleteError, deleteProduct] = useDeleteProduct();
  const [updateStatus, updateError, updateProduct] = useUpdateProduct();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [display, setDisplay] = useState(product.display);
  const [isSoldOut, setIsSoldOut] = useState(product.isSoldOut);
  const [isNewProduct, setIsNewProduct] = useState(product.isNewProduct);
  const [hasDiscount, setHasDiscount] = useState(product.hasDiscount);

  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");

  const [gender, setGender] = useState<string>(product.gender[1]);
  const [categoryId, setCategoryId] = useState(product.categoryId);
  const [collectionId, setCollectionId] = useState(product.collectionId);
  const [thumb, setThumb] = useState(product.thumb);

  const genders = [
    { name: "Men", _id: "men" },
    { name: "Women", _id: "women" },
  ];

  return (
    <C.Container>
      {deleteStatus === "failure" && <C.Error>{deleteError}</C.Error>}
      {updateStatus === "failure" && <C.Error>{updateError}</C.Error>}
      {updateStatus === "success" && (
        <C.Error>Produto atualizado com sucesso!</C.Error>
      )}

      <C.Wrapper>
        <Input
          inputType="text"
          label="Novo Nome"
          state={name}
          setState={setName}
          validState={true}
        />
        <Input
          inputType="text"
          label="Nova Descri????o"
          state={description}
          setState={setDescription}
          validState={true}
        />
      </C.Wrapper>

      <C.Wrapper>
        <RadioInput
          name="Display"
          state={display}
          setState={setDisplay}
          labelTrue="Mostrar"
          labelFalse="Esconder"
        />
        <RadioInput
          name="Estoque"
          state={isSoldOut}
          setState={setIsSoldOut}
          labelTrue="Esgotado"
          labelFalse="Disponivel"
        />
        <RadioInput
          name="Lan??amento"
          state={isNewProduct}
          setState={setIsNewProduct}
          labelTrue="Sim"
          labelFalse="N??o"
        />
        <RadioInput
          name="Desconto"
          state={hasDiscount}
          setState={setHasDiscount}
          labelTrue="Sim"
          labelFalse="N??o"
        />
      </C.Wrapper>

      <C.Wrapper>
        <Input
          inputType="number"
          label="Novo pre??o (in cents)"
          state={price}
          setState={setPrice}
          validState={true}
        />
        {hasDiscount && (
          <Input
            inputType="number"
            label="Novo Desconto (in cents)"
            state={discountPrice}
            setState={setDiscountPrice}
            validState={true}
          />
        )}
      </C.Wrapper>

      <C.SelectWrapper>
        <Select label="Genero" values={genders} setState={setGender} />
        <Select
          label="Categoria"
          values={categories}
          setState={setCategoryId}
        />
        <Select
          label="Cole????o"
          values={collections}
          setState={setCollectionId}
        />
      </C.SelectWrapper>

      <C.ImagesContainer>
        <C.Label>Selecione uma imagem de capa</C.Label>
        <C.ImageWrapper>
          {product.options.map((option) =>
            option.images.map((image) => (
              <C.Image
                key={image.key}
                image={image.url}
                isSelected={thumb === image.url}
                onClick={() => setThumb(image.url)}
              />
            ))
          )}
        </C.ImageWrapper>
      </C.ImagesContainer>

      <C.Wrapper>
        <C.EditButton
          onClick={() =>
            updateProduct(
              {
                name,
                description,
                display,
                isSoldOut,
                isNewProduct,
                price,
                discountPrice,
                hasDiscount,
                gender,
                categoryId,
                collectionId,
                thumb,
              },
              product._id
            )
          }
          disabled={updateStatus === "loading"}
        >
          {updateStatus === "loading" ? <Spinner /> : "Salvar Altera????es"}
        </C.EditButton>
        <C.DeleteButton
          onClick={() => deleteProduct(product._id)}
          disabled={deleteStatus === "loading"}
        >
          {deleteStatus === "loading" ? <Spinner /> : "Deletar Produto"}
        </C.DeleteButton>
      </C.Wrapper>
    </C.Container>
  );
}
