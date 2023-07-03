import { React, useEffect, useState } from "react";
import {
  BackgroundDiv,
  Botao,
  Caixa,
  DivMeioAzul,
  DivMeioRosa,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  SubTitulo,
  TextoAzul,
  TextoBemVindo,
  TextoBranco,
  TextoEntrarBranco,
  TextoRosaBranco,
  TiraAzul,
  Titulo,
} from "./index.js";

const Login = () => {
  const [usuario, setUsuario] = useState({ email: "", senha: "" });

  useEffect(() => {
    console.log(usuario);
  }, [usuario]);

  return (
    <BackgroundDiv>
      <DivSuperior>
        <DivTitulo>
          <DivNavLink to="/">
            <Titulo>{"Porco Rosso"}</Titulo>
          </DivNavLink>
          <SubTitulo>{"Pizzaria"}</SubTitulo>
        </DivTitulo>
      </DivSuperior>
      <TiraAzul>
        <TextoBranco>{"menu"}</TextoBranco>
        <DivNavLink to="/SobreNos/SobreNos">
          <TextoBranco>{"sobre nós"}</TextoBranco>
        </DivNavLink>
      </TiraAzul>
      <DivMeioTela>
        <DivMeioAzul>
          <TextoEntrarBranco>{"Entrar:"}</TextoEntrarBranco>
          <TextoBemVindo>{"Bem-vindo(a) de volta!"}</TextoBemVindo>
        </DivMeioAzul>
        <DivMeioRosa>
          <TextoRosaBranco>{"Email"}</TextoRosaBranco>
          <Caixa
            placeholder="Insira seu email aqui..."
            value={usuario.email}
            onChange={(e) => {
              setUsuario({ ...usuario, email: e.target.value });
            }}
          />
          <TextoRosaBranco>{"Senha"}</TextoRosaBranco>
          <Caixa
            placeholder="Insira sua senha..."
            type="password"
            value={usuario.senha}
            onChange={(e) => {
              setUsuario({ ...usuario, senha: e.target.value });
            }}
          />
          <Botao variant="contained">{"Entrar"}</Botao>
          <DivNavLink to="/Cadastrar/Cadastrar">
            <TextoAzul>{"Criar uma conta"}</TextoAzul>
          </DivNavLink>
        </DivMeioRosa>
      </DivMeioTela>
    </BackgroundDiv>
  );
};

export { Login };
