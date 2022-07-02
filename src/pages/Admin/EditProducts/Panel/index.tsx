import { useState } from "react";
import IProduct from "../../../../types/product.types";
import Edit from "./Edit";
import * as C from "./styles";

export default function Panel({ product }: { product: IProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <C.Divider>
      <C.Container>
        <C.Data>
          <C.Thumb image={product.thumb} />
          <C.Infos>
            <C.Title>{product.name}</C.Title>
            <C.Description>{product.description}</C.Description>
            <C.Description>{product._id}</C.Description>
          </C.Infos>
        </C.Data>
        <C.Actions>
          <C.Button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "Editar" : "Fechar"}
          </C.Button>
        </C.Actions>
      </C.Container>
      {isOpen && <Edit product={product} />}
    </C.Divider>
  );
}
