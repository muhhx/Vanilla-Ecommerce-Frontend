import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { selectCart } from "../../features/cartSlice";
import useCheckout from "../../hooks/useCheckout";
import Item from "./Item";
import * as C from "./styles";

export default function Cart() {
  const { cartItems, cartAmout, cartQuantity } = useSelector(selectCart);
  const [status, error, createCheckout] = useCheckout();

  return (
    <>
      <C.Section>
        <C.Quantity>{cartQuantity}</C.Quantity>
        <C.Container>
          {cartItems.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </C.Container>
      </C.Section>

      <C.CheckoutSticky>
        <C.CheckoutPanel>
          {cartQuantity === 0 && (
            <C.CheckoutSpan>Seu carrinho está vazio</C.CheckoutSpan>
          )}

          {cartQuantity > 0 && (
            <C.CheckoutContainer>
              <C.CheckoutSpan>Total: R${cartAmout}</C.CheckoutSpan>
              <C.Checkout onClick={() => createCheckout(cartItems)}>
                {status === "loading" ? <Spinner /> : "Finalizar compra"}
              </C.Checkout>
            </C.CheckoutContainer>
          )}
        </C.CheckoutPanel>
      </C.CheckoutSticky>
    </>
  );
}
