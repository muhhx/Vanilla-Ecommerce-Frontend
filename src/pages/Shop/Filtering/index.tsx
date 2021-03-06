import { useEffect, useState } from "react";
import { selectCategories } from "../../../features/categorySlice";
import { selectCollections } from "../../../features/collectionSlice";
import { useSelector } from "react-redux";
import IProduct from "../../../types/product.types";

import Filter from "./Filter";
import * as C from "./styles";

interface IProps {
  products: IProduct[];
  setFilteredProducts: (value: React.SetStateAction<IProduct[]>) => void;
}

export default function Filtering({ products, setFilteredProducts }: IProps) {
  const { categories } = useSelector(selectCategories);
  const collectionState = useSelector(selectCollections);

  const collections = collectionState.collections.map((collection) => {
    return {
      name: collection.season,
      _id: collection._id,
    };
  });

  const [filterOpen, setFilterOpen] = useState(false);
  const [genderFilter, setGenderFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [conditionFilter, setConditionFilter] = useState<string | null>(null);

  const genders = ["all", "men", "women"];
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
            name="Cole????es"
            filterState={collectionFilter}
            setFilterState={setCollectionFilter}
            options={collections}
          />
          <Filter
            name="Condi????es"
            filterState={conditionFilter}
            setFilterState={setConditionFilter}
            options={conditions}
          />
          <C.Clear onClick={clearFilters}>Clear Filters</C.Clear>
        </C.Container>
      )}
    </>
  );
}
