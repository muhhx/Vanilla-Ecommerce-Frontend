import { useState } from "react";
import * as C from "./styles";

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
              Favoritos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("Adicionar")}
              isSelected={currentPage === "Adicionar" && true}
            >
              Pedidos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("Pedidos")}
              isSelected={currentPage === "Pedidos" && true}
            >
              Conta (deletar)
            </C.Option>
          </C.Options>
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
