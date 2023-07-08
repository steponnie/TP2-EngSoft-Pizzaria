import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mui/material";

export const BackgroundDiv = styled.div`
  background: #fff4ea;
  width: 100%;
  min-height: 100vh;
  height: min-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const DivSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`;

export const DivTitulo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  padding: 0px 25px;
`;

export const Titulo = styled.h1`
  height: 69px;
  font-family: "Titan One";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 73px;
  color: #90bdff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0px;
`;

export const SubTitulo = styled.p`
  width: fit-content;
  font-family: "Titan One";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #435ebd;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0px;
`;

export const TiraAzul = styled.div`
  background: #91bdff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  margin: 0px 0px 50px;
  gap: 50px;
`;

export const TextoBranco = styled.p`
  height: 42px;
  font-family: "Titan One";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
  color: #fff4ea;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DivMeioTela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

export const DivNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const ItemCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 552px;
  height: 177px;
  flex-shrink: 0;
  align-items: center;
`;

export const ItemTitulo = styled.h2`
  color: #f8d0ab;
  font-family: Titan One;
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

export const ItemQuantidade = styled.p`
  color: #000;
  font-family: Titan One;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BotaoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  background: #d9d9d9;
  text-align: center;
  align-items: center;

  :hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Botao = styled(Button)`
  && {
    width: 300px;
    height: 54px;
    align-self: center;
    margin: 45px 0px 0px 0px;
    background-color: #90bdff;
    color: #fff;
    font-size: 24px;
    font-family: Titan One;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  
    :hover {
      background-color: #75adff;
    }
  }
`;
