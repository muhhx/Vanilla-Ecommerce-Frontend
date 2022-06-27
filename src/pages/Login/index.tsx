import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import Spinner from "../../components/Spinner";
import Input from "../../components/Input";
import * as C from "./styles";

export default function Login() {
  const [status, error, handleLogin] = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <C.Section>
      <C.Container>
        <C.FormWrapper>
          <C.Title>LOGIN</C.Title>
          {status === "failure" && <C.Error>{error}</C.Error>}

          <C.Form onSubmit={handleSubmit}>
            <Input
              label="Email"
              inputType="text"
              state={email}
              setState={setEmail}
              validState={true}
            />
            <Input
              label="Senha"
              inputType="password"
              state={password}
              setState={setPassword}
              validState={true}
            />

            <C.Button disabled={status === "loading" ? true : false}>
              {status === "loading" ? <Spinner /> : "Entrar"}
            </C.Button>
          </C.Form>

          <C.OptionsWrapper>
            <C.Option to="/register">Registrar-se</C.Option>
          </C.OptionsWrapper>
        </C.FormWrapper>
      </C.Container>
    </C.Section>
  );
}
