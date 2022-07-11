import { useState } from "react";

import Create from "./Create";
import EditProducts from "./EditProducts";
import Category from "./Category";
import Collection from "./Collection";
import * as C from "./styles";

export default function Admin() {
  const [currentPage, setCurrentPage] = useState<
    "produtos" | "criarProdutos" | "criarCategory" | "criarCollection"
  >("produtos");

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Title>Admin</C.Title>
          <C.Options>
            <C.Option
              onClick={() => setCurrentPage("produtos")}
              isSelected={currentPage === "produtos" && true}
            >
              Gerenciar Produtos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("criarProdutos")}
              isSelected={currentPage === "criarProdutos" && true}
            >
              Criar Produto
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("criarCategory")}
              isSelected={currentPage === "criarCategory" && true}
            >
              Criar Categoria
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("criarCollection")}
              isSelected={currentPage === "criarCollection" && true}
            >
              Gerenciar Coleções
            </C.Option>
          </C.Options>
          {currentPage === "produtos" && <EditProducts />}
          {currentPage === "criarProdutos" && <Create />}
          {currentPage === "criarCategory" && <Category />}
          {currentPage === "criarCollection" && <Collection />}
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
