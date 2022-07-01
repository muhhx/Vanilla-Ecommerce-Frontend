import { useState } from "react";
import * as C from "./styles";
import CreateProduct from "./CreateProduct";

export default function Admin() {
  const [currentPage, setCurrentPage] = useState<
    "Produtos" | "Adicionar" | "Pedidos"
  >("Produtos");

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Title>Admin</C.Title>
          <C.Options>
            <C.Option
              onClick={() => setCurrentPage("Produtos")}
              isSelected={currentPage === "Produtos" && true}
            >
              Produtos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("Adicionar")}
              isSelected={currentPage === "Adicionar" && true}
            >
              Adicionar
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("Pedidos")}
              isSelected={currentPage === "Pedidos" && true}
            >
              Pedidos
            </C.Option>
          </C.Options>
          {currentPage === "Adicionar" && <CreateProduct />}
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
