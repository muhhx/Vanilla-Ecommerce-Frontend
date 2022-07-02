import { useSelector } from "react-redux";
import { selectProducts } from "../../../features/productsSlice";
import Spinner from "../../../components/Spinner";
import Panel from "./Panel";
import * as C from "./styles";

export default function EditProducts() {
  const { products, status, error } = useSelector(selectProducts);

  return (
    <C.Container>
      {status === "pending" && <Spinner />}

      {status === "rejected" && <C.Error>{error}</C.Error>}

      {status === "success" &&
        products.map((product) => (
          <Panel key={product._id} product={product} />
        ))}
    </C.Container>
  );
}
