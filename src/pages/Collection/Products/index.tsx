import { useState, useEffect } from "react";
import { selectProducts } from "../../../features/productsSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ICollection from "../../../types/collection.types";
import IProduct from "../../../types/product.types";
import * as C from "./styles";

export default function Products({ collection }: { collection: ICollection }) {
  const navigate = useNavigate();
  const { products } = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState<null | IProduct[]>(
    []
  );

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.collectionId === collection._id)
    );
  }, [products, collection]);

  return (
    <>
      {filteredProducts && filteredProducts.length > 0 && (
        <C.Container>
          <C.Wrapper>
            {filteredProducts.map((product, key) => (
              <C.Frame key={key} orderStatus={key % 2 === 0 ? true : false}>
                <C.Number>{key + 1}</C.Number>
                <Link
                  key={key}
                  to={`/product/${product._id}`}
                  style={{ height: "90%" }}
                >
                  <C.Image url={product.thumb} />
                </Link>
                <C.Description>
                  <C.InfoWrapper>
                    <C.Name>{product.name}</C.Name>
                    <C.Category>{collection.season}</C.Category>
                  </C.InfoWrapper>
                  <C.Button onClick={() => navigate(`/product/${product._id}`)}>
                    CONFERIR
                  </C.Button>
                </C.Description>
              </C.Frame>
            ))}
          </C.Wrapper>
        </C.Container>
      )}
    </>
  );
}
