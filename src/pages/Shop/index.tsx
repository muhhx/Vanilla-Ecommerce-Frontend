import * as C from "./styles";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsSlice";

export default function Shop() {
  const { products } = useSelector(selectProducts);

  return (
    <div>
      <span>UEPAA SHOP</span>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}
