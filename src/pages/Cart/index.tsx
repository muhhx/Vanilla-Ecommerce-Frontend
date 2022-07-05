import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";
import { selectProducts } from "../../features/productsSlice";
import { ICartItem } from "../../types/cart.types";
import IProduct from "../../types/product.types";
import * as C from "./styles";

interface IFilteredProduct {
  product: IProduct;
  cart: ICartItem;
}

export default function Cart() {
  const { cartItems, cartAmout, cartQuantity } = useSelector(selectCart);
  //   const [filteredProducts, setFilteredProducts] = useState<IFilteredProduct[]>(
  //     []
  //   );
  //   const { products } = useSelector(selectProducts);

  //   useEffect(() => {
  //     const filter = () => {
  //       for (let i = 0; i < cartItems.length; i++) {
  //         for (let j = 0; j < products.length; j++) {
  //           if (cartItems[i].productId === products[j]._id) {
  //             console.log(j, products[j]);
  //           }
  //         }
  //       }
  //     };
  //     filter();
  //   }, [cartItems, products]);

  return (
    <>
      <span>{cartAmout}</span>
      <span>{cartQuantity}</span>
      {cartItems.length === 0 && <span>Você não possui itens no carrinho</span>}

      {cartItems.map((item, key) => (
        <div key={key}>Item</div>
      ))}
      <button>Checkout</button>
    </>
  );
}
