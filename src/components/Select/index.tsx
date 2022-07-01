import * as C from "./styles";

interface IValue {
  _id: string;
  name: string;
}

interface IProps {
  setState: (value: React.SetStateAction<string>) => void;
  values: IValue[];
  label: string;
}

export default function Select({ label, values, setState }: IProps) {
  return (
    <C.Wrapper>
      <C.Label>{label}</C.Label>
      <C.Select onChange={(e) => setState(e.target.value)}>
        <C.Option>--</C.Option>
        {values.map((value, i) => (
          <C.Option value={value._id} key={i}>
            {value.name}
          </C.Option>
        ))}
      </C.Select>
    </C.Wrapper>
  );
}
