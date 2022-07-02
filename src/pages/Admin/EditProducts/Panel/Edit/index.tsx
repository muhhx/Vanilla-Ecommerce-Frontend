import { useState } from "react";
import RadioInput from "../../../../../components/RadioInput";
import IProduct from "../../../../../types/product.types";
import Select from "../../../../../components/Select";
import Input from "../../../../../components/Input";
import * as C from "./styles";

export default function Edit({ product }: { product: IProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [display, setDisplay] = useState(product.display);
  const [isSoldOut, setIsSoldOut] = useState(product.isSoldOut);
  const [isNewProduct, setIsNewProduct] = useState(product.isNewProduct);
  const [hasDiscount, setHasDiscount] = useState(
    product.discountPrice !== null ? true : false
  );

  const [price, setPrice] = useState("");
  const [discontPrice, setDiscountPrice] = useState("");

  const [gender, setGender] = useState<string>(product.gender[1]);
  const [categoryId, setCategoryId] = useState(product.categoryId);
  const [collectionId, setCollectionId] = useState(product.collectionId);
  const [thumb, setThumb] = useState(product.thumb);

  const collections = [
    { name: "AW21", _id: "23423423423" },
    { name: "SS21", _id: "123123123" },
    { name: "AW22", _id: "2324rsfe" },
    { name: "SS22", _id: "er23r23r23" },
  ];
  const categories = [
    { name: "Shirt", _id: "23423423423" },
    { name: "Jacket", _id: "123123123" },
    { name: "Shoe", _id: "2324rsfe" },
    { name: "Cardigan", _id: "er23r23r23" },
  ];
  const genders = [
    { name: "Men", _id: "men" },
    { name: "Women", _id: "women" },
  ];

  return (
    <C.Container>
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
          label="Nova Descrição"
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
          name="Lançamento"
          state={isNewProduct}
          setState={setIsNewProduct}
          labelTrue="Sim"
          labelFalse="Não"
        />
        <RadioInput
          name="Desconto"
          state={hasDiscount}
          setState={setHasDiscount}
          labelTrue="Sim"
          labelFalse="Não"
        />
      </C.Wrapper>

      <C.Wrapper>
        <Input
          inputType="number"
          label="Novo preço"
          state={price}
          setState={setPrice}
          validState={true}
        />
        {hasDiscount && (
          <Input
            inputType="number"
            label="Novo Desconto"
            state={discontPrice}
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
          label="Coleção"
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
        <C.EditButton>Salvar Alterações</C.EditButton>
        <C.DeleteButton>Deletar Produto</C.DeleteButton>
      </C.Wrapper>
    </C.Container>
  );
}
//Name, description
//price, discountPrice (calculate discount percentage)
//display, isSoldOut, isNewProduct
//thumb
//gender (between men/women), categoryId, collectionId
//SALVAR ALTERAÇÕES, DELETAR PRODUTO
