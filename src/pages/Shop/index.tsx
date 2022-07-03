import { selectProducts } from "../../features/productsSlice";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import Product from "./Product";
import * as C from "./styles";

export default function Shop() {
  const { products, status, error } = useSelector(selectProducts);

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Title>Shop</C.Title>
        </C.Header>
        {status === "pending" && <Spinner />}

        {status === "rejected" && <C.Error>{error}</C.Error>}

        {status === "success" && (
          <C.Products>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </C.Products>
        )}
      </C.Container>
    </C.Section>
  );
}
