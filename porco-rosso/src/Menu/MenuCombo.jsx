import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
iimport { consultarCombos} from "../FirebaseUtils/Funcoes.js";
import { Grid } from "@mui/material";

let combos = [{ id: 0, bebida: "Coca-Cola", pizza_1: "Calabresa", pizza_2: "Mineira", preco: 60.00}]
consultarCombos().then(res => {
  combos = res;
  console.log(combos);
});

export const MenuCombo = () => {
  const userCredenciais = useContext(AuthContext);
  const userLogado = userCredenciais.user.email ? true : false;
  const nav = useNavigate();

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
          ativo={false}
          onClick={() => {nav('/Menu/Menu')}}
        >
          {"Pizza"}
        </DivMenuEscolha>
        <DivMenuEscolha
          ativo={false}
          onClick={() => {nav('/Menu/MenuBebida')}}
        >
          {"Bebidas"}
        </DivMenuEscolha>
        <DivMenuEscolha
          ativo={true}
          onClick={() => {nav('/Menu/MenuCombo')}}
        >
          {"Combo"}
        </DivMenuEscolha>
      </DivMenus>
      <DivOpcoes>
        <OpcaoMenu>
          <OpcaoTitulo>{"Montar pizza"} </OpcaoTitulo>
        </OpcaoMenu>
        {combos.map((item) => {
          return (
            <OpcaoMenu key={item}>
              <Grid>
                <OpcaoTitulo2>{item.bebida + " + "}</OpcaoTitulo2>
                <OpcaoTitulo2>{"Pizza " + item.pizza_1 + " + "}</OpcaoTitulo2>
                <OpcaoTitulo2>{"Pizza " + item.pizza_2}</OpcaoTitulo2>
                <OpcaoTitulo2>{"RS " + item.preco}</OpcaoTitulo2>
              </Grid>
              
            </OpcaoMenu>
          );
        })}
      </DivOpcoes>
    </BackgroundDiv>
  );
};
