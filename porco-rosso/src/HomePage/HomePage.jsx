import { React, useContext } from "react";
import {
  BackgroundDiv,
  DivCitacao,
  DivLogin,
  DivMeioTela,
  DivNavLink,
  DivPorcoRossoImg,
  DivSuperior,
  DivTitulo,
  SubTitulo,
  TextoAzul,
  TextoBranco,
  TextoFrase,
  TiraAzul,
  Titulo,
} from "./estilos.js";
import { PorcoRossoComendoSVG, PorcoRossoAviaoSVG } from "../imgs/index.jsx";
import AuthContext from "../Context/Auth.jsx";

export const HomePage = () => {
  const userCredenciais = useContext(AuthContext);

  const userLogado = userCredenciais.user.email ? true : false;

  return (
    <BackgroundDiv>
      <DivSuperior>
        <DivTitulo>
          <DivNavLink to="/">
            <Titulo>{"Porco Rosso"}</Titulo>
          </DivNavLink>
          <SubTitulo>{"Pizzaria"}</SubTitulo>
        </DivTitulo>
        <DivLogin>
          {!userLogado ? (
            <>
              <DivNavLink to="/Login/Login">
                <TextoAzul>{"Entrar"}</TextoAzul>
              </DivNavLink>
              <DivNavLink to="/Cadastrar/Cadastrar">
                <TextoAzul>{"Cadastrar"}</TextoAzul>
              </DivNavLink>
            </>
          ) : (
            <DivNavLink to="/Carrinho/Carrinho">
              <TextoAzul>{"Ver carrinho"}</TextoAzul>
            </DivNavLink>
          )}
        </DivLogin>
      </DivSuperior>
      <TiraAzul>
        <DivNavLink to="/Menu/Menu">
          <TextoBranco>{"menu"}</TextoBranco>
        </DivNavLink>
        <DivNavLink to="/SobreNos/SobreNos">
          <TextoBranco>{"sobre nós"}</TextoBranco>
        </DivNavLink>
      </TiraAzul>
      <DivMeioTela>
        <DivPorcoRossoImg>
          <PorcoRossoComendoSVG />
        </DivPorcoRossoImg>
        <DivCitacao>
          <TextoFrase>{"“A melhor pizza que já comi”"}</TextoFrase>
          <TextoFrase>{"- Porco Rosso"}</TextoFrase>
          <DivPorcoRossoImg>
            <PorcoRossoAviaoSVG />
          </DivPorcoRossoImg>
        </DivCitacao>
      </DivMeioTela>
    </BackgroundDiv>
  );
};
