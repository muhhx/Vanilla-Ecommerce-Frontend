import { Link } from "react-router-dom";
import IProduct from "../../../types/product.types";
import * as C from "./styles";

export default function Product({ product }: { product: IProduct }) {
  return (
    <Link to={`/product/${product._id}`}>
      <C.Container>
        <C.ImageWrapper>
          {product.isNewProduct && <C.NewWrapper>NEW</C.NewWrapper>}
          {product.isSoldOut && <C.SoldWrapper>SOLD OUT</C.SoldWrapper>}

          <C.Image url={product.thumb} />
        </C.ImageWrapper>

        <C.DescriptionWrapper>
          <C.Name>{product.name}</C.Name>

          <C.PriceWrapper>
            <C.Price hasDiscount={product.hasDiscount}>
              R$ {product.price}
            </C.Price>

            {product.hasDiscount && (
              <C.PriceDiscount>R$ {product.discountPrice}</C.PriceDiscount>
            )}
          </C.PriceWrapper>
        </C.DescriptionWrapper>
      </C.Container>
    </Link>
  );
}
