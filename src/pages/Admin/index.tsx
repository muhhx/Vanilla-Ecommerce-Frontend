import { useState } from "react";
import Create from "./Create";
import EditProducts from "./EditProducts";
import * as C from "./styles";

export default function Admin() {
  const [currentPage, setCurrentPage] = useState<
    "Produtos" | "Adicionar" | "CreateCollection" | "Pedidos"
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
              onClick={() => setCurrentPage("CreateCollection")}
              isSelected={currentPage === "CreateCollection" && true}
            >
              Criar Coleção
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("Pedidos")}
              isSelected={currentPage === "Pedidos" && true}
            >
              Pedidos
            </C.Option>
          </C.Options>
          {currentPage === "Adicionar" && <Create />}
          {currentPage === "Produtos" && <EditProducts />}
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
