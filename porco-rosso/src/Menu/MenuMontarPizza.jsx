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
import { consultarPizza} from "../FirebaseUtils/Funcoes.js";

let pizza = [];
consultarPizza().then((res) => {
  pizza = res;
});

export const MenuMontarPizza = () => {
  const userCredenciais = useContext(AuthContext);
  const userLogado = userCredenciais.user.email ? true : false;
  const nav = useNavigate();
  let saboresPizza = []

  function montarPizza(item) {
    saboresPizza.push(item);
    if (saboresPizza.length === 2) {
      adicionarNoCarrinho(saboresPizza)
    }
  }

  function adicionarNoCarrinho(item) {
    if(userCredenciais.user.email) {
      let novoItem = {nome: item[0].sabor + "+" + item[1].sabor, qt: 1, preco: (item[0].preco + item[1].preco)/2};
      userCredenciais.setUserInfo({...userCredenciais.user, carrinho: [...userCredenciais.user.carrinho, novoItem]});
      nav('/Carrinho/Carrinho');
    }
  }

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
          ativo={false}
          onClick={() => {nav('/Menu/MenuCombo')}}
        >
          {"Combo"}
        </DivMenuEscolha>
      </DivMenus>
      <DivOpcoes>
        {pizza.map((item) => {
          return (
            <OpcaoMenu key={item.sabor} onClick={() => {montarPizza(item)}}>
              <OpcaoTitulo>{item.sabor}</OpcaoTitulo>
              <OpcaoTitulo>{"RS " + item.preco}</OpcaoTitulo>
            </OpcaoMenu>
          );
        })}
      </DivOpcoes>
    </BackgroundDiv>
  );
};
