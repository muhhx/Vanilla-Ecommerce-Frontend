import * as C from "./styles";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../features/authSlice";
import useDeleteUser from "../../../hooks/useDeleteUser";
import Spinner from "../../../components/Spinner";

export default function Account() {
  const { userId } = useSelector(selectAuth);
  const [status, error, deleteUser] = useDeleteUser();

  return (
    <C.Container>
      {status === "failure" && <C.Error>{error}</C.Error>}

      <C.Title>Deletar conta</C.Title>
      <C.Delete onClick={() => deleteUser(userId)}>
        {status === "loading" ? <Spinner /> : "Deletar"}
      </C.Delete>
    </C.Container>
  );
}
