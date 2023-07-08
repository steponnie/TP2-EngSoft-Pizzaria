import { React, useContext, useState } from "react";
import AuthContext from "../Context/Auth.jsx";
import {
  BackgroundDiv,
  Botao,
  BotaoItem,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  ItemCarrinho,
  ItemDiv,
  ItemQuantidade,
  ItemTitulo,
  SubTitulo,
  TextoBranco,
  TiraAzul,
  Titulo,
} from "./estilos.js";

export const Carrinho = () => {
  const userCredenciais = useContext(AuthContext);
  const [carrinho, setCarrinho] = useState(userCredenciais.user.carrinho);

  const userLogado = userCredenciais.user.email ? true : false;

  function somarQuantidade(item, i) {
    let quantidade = item.qt;
    let novoItem = { ...item, qt: quantidade + 1 };
    let novoCarrinho = carrinho.slice();
    novoCarrinho[i] = novoItem;
    setCarrinho(novoCarrinho);
    userCredenciais.setUser({
      ...userCredenciais.user,
      carrinho: novoCarrinho,
    });
  }

  function subtrairQuantidade(item, i) {
    let quantidade = item.qt;
    let novoItem = { ...item, qt: quantidade - 1 };
    let novoCarrinho = carrinho.slice();
    novoCarrinho[i] = novoItem;
    if (novoItem.qt <= 0) {
      delete novoCarrinho[i];
    }
    setCarrinho(novoCarrinho);
    userCredenciais.setUser({
      ...userCredenciais.user,
      carrinho: novoCarrinho,
    });
  }

  console.log(carrinho);

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
        <DivNavLink to="/Menu/Menu">
          <TextoBranco>{"menu"}</TextoBranco>
        </DivNavLink>
        <DivNavLink to="/SobreNos/SobreNos">
          <TextoBranco>{"sobre nós"}</TextoBranco>
        </DivNavLink>
      </TiraAzul>
      {userLogado ? (
        <>
          <DivMeioTela>
            <DivTitulo>
              <SubTitulo>
                {"Carrinho: "}
              </SubTitulo>
            </DivTitulo>
            {carrinho.map((item, i) => {
              return (
                <ItemCarrinho key={i} id={item}>
                  <ItemTitulo>{item.nome}</ItemTitulo>
                  <ItemDiv>
                    <BotaoItem onClick={() => subtrairQuantidade(item, i)}>
                      {"-"}
                    </BotaoItem>
                    <ItemQuantidade>{item.qt}</ItemQuantidade>
                    <BotaoItem onClick={() => somarQuantidade(item, i)}>
                      {"+"}
                    </BotaoItem>
                  </ItemDiv>
                </ItemCarrinho>
              );
            })}
            <Botao variant="contained">{"Finalizar pedido"}</Botao>
          </DivMeioTela>
        </>
      ) : (
        <DivMeioTela />
      )}
    </BackgroundDiv>
  );
};
