import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCollections } from "../../../features/collectionSlice";
import { selectCategories } from "../../../features/categorySlice";
import { IOption, IImage } from "../../../types/product.types";
import useCreateProduct from "../../../hooks/useCreateProduct";

import Spinner from "../../../components/Spinner";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import Option from "./Option";
import * as C from "./styles";

export default function Create() {
  const { categories } = useSelector(selectCategories);
  const { collections } = useSelector(selectCollections);

  const collectionsFinal = collections.map((collection) => {
    return {
      name: collection.season,
      _id: collection._id,
    };
  });
  const [status, error, createProduct] = useCreateProduct();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const [currentOption, setCurrentOption] = useState(1);
  const [options, setOptions] = useState<IOption[]>([
    {
      name: "",
      color: "",
      images: [],
      sizes: [],
      key: 1,
      isWritten: false,
    },
  ]);

  const genders = [
    { name: "Men", _id: "men" },
    { name: "Women", _id: "women" },
  ];

  const handleAddOption = () => {
    setOptions((prevState) => [
      ...prevState,
      {
        name: "",
        color: "",
        images: [],
        sizes: [],
        key: Date.now(),
        isWritten: false,
      },
    ]);
  };

  const handleRemoveOption = (key: number) => {
    setOptions((prevState) => prevState.filter((option) => option.key !== key));
  };

  const handleUpdateOption = (
    key: number,
    field: string,
    newState:
      | string
      | string[]
      | IImage[]
      | React.ChangeEvent<HTMLInputElement>
      | boolean
  ) => {
    setOptions((prevState) => {
      const updatedState = prevState.map((option) => {
        if (option.key === key) {
          return {
            ...option,
            [field]: newState,
          };
        }
        return option;
      });

      return updatedState;
    });
  };

  const handleSubmitProduct = () => {
    createProduct({
      name,
      description,
      gender,
      price,
      categoryId,
      collectionId,
      options,
    });
  };

  return (
    <C.Container>
      {status === "success" && (
        <C.Wrapper>
          <C.Title>Produto criado com sucesso.</C.Title>
        </C.Wrapper>
      )}

      {status !== "success" && (
        <>
          <C.Title>Informa????es B??sicas</C.Title>

          {status === "failure" && <C.Error>{error}</C.Error>}

          <C.Wrapper>
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
              label="Price (in cents)"
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
                label="Cole????o"
                values={collectionsFinal}
                setState={setCollectionId}
              />
            </C.SelectWrapper>
          </C.Wrapper>

          <C.OptionContainer>
            <C.Title>Op????es do Produto</C.Title>
            <C.OptionButtons>
              {options.map((option, i) => (
                <C.Option
                  key={i}
                  isSelected={option.key === currentOption}
                  onClick={() => setCurrentOption(option.key)}
                />
              ))}
              <C.AddButton onClick={handleAddOption}>+</C.AddButton>
            </C.OptionButtons>

            {options.map((option, i) => (
              <C.OptionWrapper
                key={option.key}
                isSelected={currentOption === option.key}
              >
                <C.OptionHeader>
                  <C.OptionTitle>OPTION {i + 1}</C.OptionTitle>
                  <C.DeleteOption
                    onClick={() => handleRemoveOption(option.key)}
                  >
                    DELETAR OPTION {i + 1}
                  </C.DeleteOption>
                </C.OptionHeader>
                <Option
                  option={option}
                  handleUpdateOption={handleUpdateOption}
                />
              </C.OptionWrapper>
            ))}
          </C.OptionContainer>

          <C.Button
            disabled={
              !name ||
              !description ||
              !price ||
              !gender ||
              !categoryId ||
              !collectionId ||
              options.length === 0 ||
              status === "loading"
            }
            onClick={handleSubmitProduct}
          >
            {status === "loading" ? <Spinner /> : "Criar Produto"}
          </C.Button>
        </>
      )}
    </C.Container>
  );
}
