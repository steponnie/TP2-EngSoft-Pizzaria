import { React } from "react";
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
        <TextoBranco>{"sobre nós"}</TextoBranco>
      </TiraAzul>
      <DivMeioTela>
        <DivMeioAzul>
          <TextoEntrarBranco>{"Entrar:"}</TextoEntrarBranco>
          <TextoBemVindo>{"Bem-vindo(a) de volta!"}</TextoBemVindo>
        </DivMeioAzul>
        <DivMeioRosa>
          <TextoRosaBranco>{"Email"}</TextoRosaBranco>
          <Caixa placeholder="Insira seu email aqui..." />
          <TextoRosaBranco>{"Senha"}</TextoRosaBranco>
          <Caixa placeholder="Insira sua senha..." type="password" />
          <Botao variant="contained">{"Entrar"}</Botao>
          <DivNavLink
            to="/Cadastrar/Cadastrar"> 
            <TextoAzul> 
              {"Criar uma conta"}
            </TextoAzul>
          </DivNavLink>
        </DivMeioRosa>
      </DivMeioTela>
    </BackgroundDiv>
  );
};

export { Login };
