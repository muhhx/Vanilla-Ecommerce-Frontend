import React, { useState, useEffect } from "react";
import useRegister from "../../hooks/useRegister";
import Input from "../../components/Input";
import config from "../../config";
import Spinner from "../../components/Spinner";
import * as C from "./styles";

export default function Register() {
  const [status, error, handleRegister] = useRegister();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  const passwordRegex = config.passwordRegex;
  const emailRegex = config.emailRegex;

  useEffect(() => {
    setValidEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(passwordRegex.test(password));
    setValidMatchPassword(password === matchPassword);
  }, [password, matchPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleRegister({
      name,
      email,
      password,
      passwordConfirmation: matchPassword,
    });
  };

  return (
    <C.Section>
      <C.Container>
        <C.FormWrapper>
          <C.Title>SIGNUP</C.Title>
          {status === "failure" && <C.Error>{error}</C.Error>}
          <C.Form onSubmit={handleSubmit}>
            <Input
              label="Name"
              state={name}
              validState={true}
              setState={setName}
              inputType="text"
            />

            <Input
              label="Email"
              state={email}
              validState={validEmail}
              setState={setEmail}
              inputType="text"
            />

            <Input
              label="Password"
              state={password}
              validState={validPassword}
              setState={setPassword}
              inputType="password"
            />

            {!validPassword && (
              <C.Panel>
                <C.PanelText>8 a 24 caracteres</C.PanelText>
                <C.PanelText>
                  Inclua ao menos uma letra uppercase, lowercase, um número e um
                  caracter especial
                </C.PanelText>
                <C.PanelText>
                  Caracteres especiais permitidos: !@#$%
                </C.PanelText>
              </C.Panel>
            )}

            <Input
              label="Confirm password"
              state={matchPassword}
              validState={validMatchPassword}
              setState={setMatchPassword}
              inputType="password"
            />

            <C.Button
              disabled={
                !name ||
                !validEmail ||
                !validPassword ||
                !validMatchPassword ||
                status === "loading"
                  ? true
                  : false
              }
            >
              {status == "loading" ? <Spinner /> : "Registrar"}
            </C.Button>
          </C.Form>

          <C.OptionsWrapper>
            <C.Option to="/login">Fazer Login.</C.Option>
          </C.OptionsWrapper>
        </C.FormWrapper>
      </C.Container>
    </C.Section>
  );
}
