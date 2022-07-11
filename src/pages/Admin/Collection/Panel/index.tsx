import { useState } from "react";
import ICollection from "../../../../types/collection.types";
import Edit from "./Edit";
import * as C from "./styles";

export default function Panel({ collection }: { collection: ICollection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <C.Divider>
      <C.Container>
        <C.Data>
          <C.Thumb image={collection.cover[0]} />
          <C.Infos>
            <C.Title>{collection.name}</C.Title>
            <C.Description>{collection.description}</C.Description>
            <C.Description>{collection._id}</C.Description>
          </C.Infos>
        </C.Data>
        <C.Actions>
          <C.Button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "Editar" : "Fechar"}
          </C.Button>
        </C.Actions>
      </C.Container>
      {isOpen && <Edit collection={collection} />}
    </C.Divider>
  );
}
