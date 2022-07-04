import { useEffect } from "react";
import { useState } from "react";
import IProduct from "../../../types/product.types";
import Filter from "./Filter";
import * as C from "./styles";

interface IProps {
  products: IProduct[];
  setFilteredProducts: (value: React.SetStateAction<IProduct[]>) => void;
}

export default function Filtering({ products, setFilteredProducts }: IProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [genderFilter, setGenderFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [conditionFilter, setConditionFilter] = useState<string | null>(null);

  //Criar um objeto contendo todas as opções de filtragem. Quando o usuário clica em uma opção:
  //1. se ja houver uma opção && essa opção for === a opção selecionada pelo usuario, setar essa opção específica para uma empty string;
  //2. senao, setar essa opçaõ pela opção selecionada pelo usuario
  //Com isso, vou ter um objeto sempre atualizado com todas as propriedades de filtragem

  const genders = ["all", "men", "women"];
  const categories = [
    { name: "Shirt", _id: "23423423423" },
    { name: "Jacket", _id: "123123123" },
    { name: "Shoe", _id: "2324rsfe" },
    { name: "Cardigan", _id: "er23r23r23" },
  ];
  const collections = [
    { name: "AW21", _id: "23423423423" },
    { name: "SS21", _id: "123123123" },
    { name: "AW22", _id: "2324rsfe" },
    { name: "SS22", _id: "er23r23r23" },
  ];
  const conditions = [
    { name: "Novidade", _id: "new" },
    { name: "Esgotado", _id: "soldOut" },
    { name: "Desconto", _id: "discount" },
  ];

  const clearFilters = () => {
    setGenderFilter("all");
    setCategoryFilter(null);
    setCollectionFilter(null);
    setConditionFilter(null);
  };

  useEffect(() => {
    setFilteredProducts(
      products
        .filter((product) => product.display)
        .filter((product) => product.gender.includes(genderFilter))
        .filter((product) => {
          if (categoryFilter === null) {
            return product;
          } else if (product.categoryId === categoryFilter) {
            return product;
          }
        })
        .filter((product) => {
          if (collectionFilter === null) {
            return product;
          } else if (product.collectionId === collectionFilter) {
            return product;
          }
        })
        .filter((product) => {
          if (conditionFilter === null) {
            return product;
          } else if (
            conditionFilter === "new" &&
            product.isNewProduct === true
          ) {
            return product;
          } else if (
            conditionFilter === "discount" &&
            product.hasDiscount === true
          ) {
            return product;
          } else if (
            conditionFilter === "soldOut" &&
            product.isSoldOut === true
          ) {
            return product;
          }
        })
    );
  }, [genderFilter, categoryFilter, collectionFilter, conditionFilter]);

  return (
    <>
      <C.Control>
        <C.Wrapper>
          {genders.map((gender, i) => (
            <C.GenderWrapper key={i} onClick={() => setGenderFilter(gender)}>
              <C.Option isClicked={genderFilter === gender}>{gender}</C.Option>
            </C.GenderWrapper>
          ))}
        </C.Wrapper>
        <C.Wrapper>
          <C.Option
            onClick={() => setFilterOpen(!filterOpen)}
            isClicked={filterOpen}
          >
            Filter
          </C.Option>
        </C.Wrapper>
      </C.Control>

      {filterOpen && (
        <C.Container>
          <Filter
            name="Categoria"
            filterState={categoryFilter}
            setFilterState={setCategoryFilter}
            options={categories}
          />
          <Filter
            name="Coleções"
            filterState={collectionFilter}
            setFilterState={setCollectionFilter}
            options={collections}
          />
          <Filter
            name="Condições"
            filterState={conditionFilter}
            setFilterState={setConditionFilter}
            options={conditions}
          />
          <C.Clear onClick={clearFilters}>Clear</C.Clear>
        </C.Container>
      )}
    </>
  );
}
