import { useEffect, useState } from "react";
import useImageUpload from "../../../hooks/useImageUpload";
import useCreateProduct from "../../../hooks/useCreateProduct";
import useCreateOption from "../../../hooks/useCreateOption";

import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Color from "../../../components/Color";
import Spinner from "../../../components/Spinner";
import * as C from "./styles";

//Você precisa ter todos os campos preenchidos para poder criar o produto
//1. Criar protudo com as imagens da option e retornar o productId para ser usado na criação da option
//2. Criar a option

export default function CreateProduct() {
  const [imageUploadStatus, imageUploadError, images, handleUploadImages] =
    useImageUpload();
  const [createProductStatus, createProductError, createProduct] =
    useCreateProduct();
  const [createOptionStatus, createOptionError, createOption] =
    useCreateOption();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [collectionId, setCollectionId] = useState("");

  const [colorName, setColorName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);

  //Collections State
  const collections = [
    { name: "AW21", _id: "23423423423" },
    { name: "SS21", _id: "123123123" },
    { name: "AW22", _id: "2324rsfe" },
    { name: "SS22", _id: "er23r23r23" },
  ];
  //Categories State
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

  const handleAddSize = () => {
    setSizes([...sizes, size.toUpperCase()]);
    setSize("");
  };

  const handleRemoveSize = (removeSize: string) => {
    setSizes(sizes.filter((size) => size !== removeSize));
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    handleUploadImages(files);
  };

  const handleCreatePost = async () => {
    const productId = await createProduct({
      name,
      description,
      price,
      gender,
      categoryId,
      collectionId,
      thumb: images ? images[0].url : null,
    });

    if (!productId || !images) return;

    createOption({
      productId,
      name: colorName,
      sizes,
      images,
      color,
    });
  };

  return (
    <C.Container>
      <C.Title>Criar Produto</C.Title>

      {createProductStatus === "success" &&
        createOptionStatus === "success" && (
          <C.Error>Produto Criado com sucesso!</C.Error>
        )}

      <Input
        label="Product Name"
        inputType="text"
        state={name}
        setState={setName}
        validState={true}
      />
      <Input
        label="Description"
        inputType="text"
        state={description}
        setState={setDescription}
        validState={true}
      />
      <Input
        label="Price"
        inputType="number"
        state={price}
        setState={setPrice}
        validState={true}
      />

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

      <C.OptionWrapper>
        <C.Title>Opção Obrigatória</C.Title>

        <C.Wrapper>
          <Input
            label="Color Name"
            inputType="text"
            state={colorName}
            setState={setColorName}
            validState={true}
          />

          <Color label="Select Color" setState={setColor} />
        </C.Wrapper>

        <C.Wrapper>
          <Input
            label="Tamanhos"
            inputType="text"
            state={size}
            setState={setSize}
            validState={true}
          />
          <C.Button onClick={handleAddSize}>Add</C.Button>
        </C.Wrapper>

        {sizes.map((size, i) => (
          <C.Sizes key={i}>
            <C.Size>{size}</C.Size>
            <C.Remove onClick={() => handleRemoveSize(size)}>REMOVE</C.Remove>
          </C.Sizes>
        ))}

        <C.Upload htmlFor="image-uploader">
          {imageUploadStatus === "loading" ? <Spinner /> : "Upload Images"}
        </C.Upload>

        <C.UploadTransparent
          type="file"
          accept="image/*"
          id="image-uploader"
          multiple
          onChange={(e) => handleUploadImage(e)}
        />

        {images && (
          <C.ImageWrapper>
            <C.Label>Imagens:</C.Label>
            <C.ImagesContainer>
              {images.map((image, i) => (
                <C.Image key={i} image={image.url} />
              ))}
            </C.ImagesContainer>
          </C.ImageWrapper>
        )}
      </C.OptionWrapper>

      <C.Button
        disabled={
          !name ||
          !price ||
          !gender ||
          !description ||
          !categoryId ||
          !collectionId ||
          !colorName ||
          !color ||
          !sizes ||
          !images
            ? true
            : false
        }
        onClick={() => handleCreatePost()}
      >
        {createProductStatus === "loading" ||
        createOptionStatus === "loading" ? (
          <Spinner />
        ) : (
          "Criar Produto"
        )}
      </C.Button>
    </C.Container>
  );
}
