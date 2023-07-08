import { React, useContext } from "react";
import AuthContext from "../Context/Auth.jsx";
import {
  BackgroundDiv,
  DivLogin,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  SubTitulo,
  TextoAzul,
  TextoBranco,
  TextoFrase,
  TextoRosa,
  TiraAzul,
  Titulo,
} from "./estilos.js";

export const SobreNos = () => {
  const userCredenciais = useContext(AuthContext);
  const userLogado = userCredenciais.user.email ? true : false;

  return (
    <BackgroundDiv>
      <DivSuperior>
        <DivTitulo>
          <DivNavLink
            to="/">
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
        <DivNavLink
          to="/SobreNos/SobreNos">
          <TextoRosa>
            {"sobre nós"}
          </TextoRosa>
        </DivNavLink>
      </TiraAzul>
      <DivMeioTela>
        <TextoFrase> 
          {"Quem é a Porco Rosso?"}
        </TextoFrase>
        <TextoFrase> 
          {"Porco Rosso é tudo de bom que a pizza proporciona!"}
        </TextoFrase>
      </DivMeioTela>
    </BackgroundDiv>
  );
};
