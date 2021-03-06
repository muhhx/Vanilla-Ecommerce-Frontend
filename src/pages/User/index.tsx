import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { selectUser } from "../../features/userSlice";
import useLogout from "../../hooks/useLogout";
import Favorites from "./Favorites";
import Account from "./Account";
import * as C from "./styles";

export default function User() {
  const { name, email, favorites, status, error } = useSelector(selectUser);
  const [LogoutStatus, LogoutError, handleLogout] = useLogout();
  const [currentPage, setCurrentPage] = useState<"favs" | "conta">("favs");

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Wrapper>
            <C.Title>Perfil</C.Title>
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
              onClick={() => setCurrentPage("conta")}
              isSelected={currentPage === "conta" && true}
            >
              Conta
            </C.Option>
          </C.Options>
          {currentPage === "favs" && <Favorites favorites={favorites} />}
          {currentPage === "conta" && <Account />}
        </C.Header>
      </C.Container>
    </C.Section>
  );
}
