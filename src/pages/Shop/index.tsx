import { useEffect, useState } from "react";
import { selectProducts } from "../../features/productsSlice";
import { useSelector } from "react-redux";
import IProduct from "../../types/product.types";
import Spinner from "../../components/Spinner";
import Filtering from "./Filtering";
import Product from "./Product";
import * as C from "./styles";

export default function Shop() {
  const { products, status, error } = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(
        products.filter((product) => product.display === true)
      );
    }
  }, [products]);

  return (
    <C.Section>
      <C.Container>
        <C.Header>
          <C.Title>Shop</C.Title>

          <Filtering
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </C.Header>

        {status === "pending" && <Spinner />}

        {status === "rejected" && <C.Error>{error}</C.Error>}

        {status === "success" && (
          <>
            {filteredProducts.length === 0 && (
              <C.Span>Nenhum produto encontrado</C.Span>
            )}

            <C.Products>
              {filteredProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </C.Products>
          </>
        )}
      </C.Container>
    </C.Section>
  );
}
