import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import {
  addToCart,
  removeFromCart,
  subtractFromCart,
} from "../../../features/cartSlice";
import Spinner from "../../../components/Spinner";
import { selectProducts } from "../../../features/productsSlice";
import { ICartItem } from "../../../types/cart.types";
import IProduct from "../../../types/product.types";
import { sliceString } from "../../../utils/formatter";
import * as C from "./styles";

export default function Item({ item }: { item: ICartItem }) {
  const dispatch: AppDispatch = useDispatch();
  const [productData, setProductData] = useState<IProduct>();
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    setProductData(
      products.filter((product) => product._id === item.productId)[0]
    );
  }, [products]);

  const handleAdd = (
    productId: string,
    colorIndex: number,
    size: string,
    price: number
  ) => {
    dispatch(addToCart({ productId, colorIndex, size, price }));
  };

  const handleSubtract = (
    productId: string,
    colorIndex: number,
    size: string,
    price: number
  ) => {
    dispatch(subtractFromCart({ productId, colorIndex, size, price }));
  };

  const handleDelete = (
    productId: string,
    colorIndex: number,
    size: string,
    price: number
  ) => {
    dispatch(removeFromCart({ productId, colorIndex, size, price }));
  };

  return (
    <>
      {!productData || !item ? (
        <Spinner />
      ) : (
        <C.Wrapper>
          <C.Image url={productData.options[item.colorIndex].images[0].url} />

          <C.Information>
            <C.BasicInformation>
              <C.Name>{productData.name}</C.Name>
              <C.Span>Size: {item.size}</C.Span>
              <C.Span>
                Color: {productData.options[item.colorIndex].name}
              </C.Span>
            </C.BasicInformation>

            <C.Delete
              onClick={() =>
                handleDelete(
                  item.productId,
                  item.colorIndex,
                  item.size,
                  productData.price
                )
              }
            >
              REMOVE
            </C.Delete>

            <C.FunctionalInformation>
              <C.Operations>
                <C.Button
                  onClick={() =>
                    handleAdd(
                      item.productId,
                      item.colorIndex,
                      item.size,
                      productData.price
                    )
                  }
                >
                  +
                </C.Button>
                <C.Span>{item.quantity}</C.Span>
                <C.Button
                  onClick={() =>
                    handleSubtract(
                      item.productId,
                      item.colorIndex,
                      item.size,
                      productData.price
                    )
                  }
                >
                  -
                </C.Button>
              </C.Operations>

              <C.Price>
                R${" "}
                {productData.hasDiscount
                  ? sliceString(productData.discountPrice)
                  : sliceString(productData.price)}
              </C.Price>
            </C.FunctionalInformation>
          </C.Information>
        </C.Wrapper>
      )}
    </>
  );
}
