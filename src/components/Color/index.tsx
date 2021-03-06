import IImage from "../../types/image.types";
import * as C from "./styles";

interface IProps {
  handleUpdateOption: (
    key: number,
    field: string,
    newState: string | string[] | IImage[] | React.ChangeEvent<HTMLInputElement>
  ) => void;
  label: string;
  optionKey: number;
  field: string;
}

export default function Color({
  label,
  optionKey,
  field,
  handleUpdateOption,
}: IProps) {
  return (
    <C.Wrapper>
      <C.Label>{label}</C.Label>
      <C.Input
        type="color"
        onChange={(e) => handleUpdateOption(optionKey, field, e.target.value)}
      />
    </C.Wrapper>
  );
}
