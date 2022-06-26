import { useState } from "react";
import * as C from "./styles";

interface IProps {
  label: string;
  state: string;
  setState: (value: React.SetStateAction<string>) => void;
  validState: boolean;
  inputType: string;
}

const ERR_ICON =
  "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-error-4.png&r=128&g=128&b=128";
const VIEW_ICON =
  "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-eye-4.png&r=128&g=128&b=128";

export default function Input({
  label,
  state,
  validState,
  setState,
  inputType,
}: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <C.InputWrapper>
      <C.Label>{label}</C.Label>
      <C.Input
        type={showPassword ? "text" : inputType}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <C.Icons>
        {!validState && state && <C.Error image={ERR_ICON} />}
        {inputType === "password" && (
          <C.View
            image={VIEW_ICON}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </C.Icons>
    </C.InputWrapper>
  );
}
