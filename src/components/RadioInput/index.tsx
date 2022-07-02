import React from "react";
import * as C from "./styles";

interface IProps {
  name: string;
  state: boolean;
  setState: (value: React.SetStateAction<boolean>) => void;
  labelTrue: string;
  labelFalse: string;
}

export default function RadioInput({
  name,
  state,
  setState,
  labelTrue,
  labelFalse,
}: IProps) {
  return (
    <C.Form>
      <C.Name>{name}</C.Name>
      <C.Wrapper>
        <C.Input
          type="radio"
          id={labelTrue}
          name={name}
          value="true"
          defaultChecked={state === true}
          onClick={() => setState(true)}
        />
        <C.Label htmlFor={labelTrue}>{labelTrue}</C.Label>
      </C.Wrapper>
      <C.Wrapper>
        <C.Input
          type="radio"
          id={labelFalse}
          name={name}
          value="false"
          defaultChecked={state === false}
          onClick={() => setState(false)}
        />
        <C.Label htmlFor={labelFalse}>{labelFalse}</C.Label>
      </C.Wrapper>
    </C.Form>
  );
}
