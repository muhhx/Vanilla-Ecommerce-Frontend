import IImage from "../../types/image.types";
import * as C from "./styles";

interface IProps {
  handleUpdateOption: (
    key: number,
    field: string,
    newState:
      | string
      | string[]
      | IImage[]
      | React.ChangeEvent<HTMLInputElement>
      | boolean
  ) => void;
  label: string;
  optionKey: number;
  field: string;
}
export default function CustomInput({
  label,
  optionKey,
  field,
  handleUpdateOption,
}: IProps) {
  return (
    <C.InputWrapper>
      <C.Label>{label}</C.Label>
      <C.Input
        type={"text"}
        onChange={(e) => handleUpdateOption(optionKey, field, e.target.value)}
      />
    </C.InputWrapper>
  );
}
