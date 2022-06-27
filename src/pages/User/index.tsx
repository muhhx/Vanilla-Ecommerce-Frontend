import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import * as C from "./styles";

export default function User() {
  const { name, email } = useSelector(selectUser);
  const [status, error, handleLogout] = useLogout();
  const [currentPage, setCurrentPage] = useState<
    "conta" | "favs" | "pedidos" | "addresses" | "payments"
  >("favs");

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Title>{name}</C.Title>
          <span>{email}</span>
          <button onClick={() => handleLogout()}>Logout</button>
          <C.Options>
            <C.Option
              onClick={() => setCurrentPage("favs")}
              isSelected={currentPage === "favs" && true}
            >
              Favoritos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("pedidos")}
              isSelected={currentPage === "pedidos" && true}
            >
              Pedidos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("addresses")}
              isSelected={currentPage === "addresses" && true}
            >
              Endereços
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("payments")}
              isSelected={currentPage === "payments" && true}
            >
              Pagamentos
            </C.Option>
            <C.Option
              onClick={() => setCurrentPage("conta")}
              isSelected={currentPage === "conta" && true}
            >
              Conta (deletar)
            </C.Option>
          </C.Options>
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
