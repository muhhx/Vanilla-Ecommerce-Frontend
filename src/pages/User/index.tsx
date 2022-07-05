import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { selectUser } from "../../features/userSlice";
import useLogout from "../../hooks/useLogout";
import Favorites from "./Favorites";
import * as C from "./styles";

export default function User() {
  const { name, email, favorites, status, error } = useSelector(selectUser);
  const [LogoutStatus, LogoutError, handleLogout] = useLogout();
  const [currentPage, setCurrentPage] = useState<"conta" | "favs" | "pedidos">(
    "favs"
  );

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Wrapper>
            <C.Title>{name}</C.Title>
            <C.Span>{email}</C.Span>
            <C.Button onClick={() => handleLogout()}>
              {LogoutStatus === "loading" ? <Spinner /> : "Logout"}
            </C.Button>
          </C.Wrapper>
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
              onClick={() => setCurrentPage("conta")}
              isSelected={currentPage === "conta" && true}
            >
              Conta (deletar)
            </C.Option>
          </C.Options>
          {currentPage === "favs" && <Favorites favorites={favorites} />}
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
