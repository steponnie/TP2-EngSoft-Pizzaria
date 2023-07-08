import { React, useState, useContext } from "react";
import AuthContext from "../Context/Auth.jsx";
import {
  BackgroundDiv,
  DivLogin,
  DivMenuEscolha,
  DivMenus,
  DivNavLink,
  DivOpcoes,
  DivSuperior,
  DivTitulo,
  OpcaoMenu,
  OpcaoTitulo,
  SubTitulo,
  TextoAzul,
  TextoBranco,
  TextoRosa,
  TiraAzul,
  Titulo,
} from "./estilos.js";

export const Menu = () => {
  const userCredenciais = useContext(AuthContext);
  const userLogado = userCredenciais.user.email ? true : false;

  const [exibicaoPizza, setExibizacaoPizza] = useState(true);
  const [exibicaoBebida, setExibizacaoBebida] = useState(false);
  const [exibicaoCombo, setExibizacaoCombo] = useState(false);

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
          <TextoRosa>{"menu"}</TextoRosa>
        </DivNavLink>
        <DivNavLink to="/SobreNos/SobreNos">
          <TextoBranco>{"sobre nós"}</TextoBranco>
        </DivNavLink>
      </TiraAzul>
      <DivMenus>
        <DivMenuEscolha
          ativo={exibicaoPizza}
          onClick={() => {
            setExibizacaoPizza(true);
            setExibizacaoBebida(false);
            setExibizacaoCombo(false);
          }}
        >
          {"Pizza"}
        </DivMenuEscolha>
        <DivMenuEscolha
          ativo={exibicaoBebida}
          onClick={() => {
            setExibizacaoPizza(false);
            setExibizacaoBebida(true);
            setExibizacaoCombo(false);
          }}
        >
          {" "}
          {"Bebidas"}{" "}
        </DivMenuEscolha>
        <DivMenuEscolha
          ativo={exibicaoCombo}
          onClick={() => {
            setExibizacaoPizza(false);
            setExibizacaoBebida(false);
            setExibizacaoCombo(true);
          }}
        >
          {" "}
          {"Combo"}{" "}
        </DivMenuEscolha>
      </DivMenus>
      <DivOpcoes>
        <OpcaoMenu>
          {" "}
          <OpcaoTitulo>{"Montar pizza"} </OpcaoTitulo>{" "}
        </OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
        <OpcaoMenu>{"Montar combo"}</OpcaoMenu>
      </DivOpcoes>
    </BackgroundDiv>
  );
};
