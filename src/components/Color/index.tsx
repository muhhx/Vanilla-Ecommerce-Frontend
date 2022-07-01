import React from "react";
import * as C from "./styles";

interface IProps {
  setState: (value: React.SetStateAction<string>) => void;
  label: string;
}

export default function Color({ label, setState }: IProps) {
  return (
    <C.Wrapper>
      <C.Label>{label}</C.Label>
      <C.Input type="color" onChange={(e) => setState(e.target.value)} />
    </C.Wrapper>
  );
}
