import { NavLink } from "react-router-dom";
import { Input, Button, Select, MenuItem } from "@mui/material";
import styled from "styled-components";

export const BackgroundDiv = styled.div`
  background: #fff4ea;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
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
  font-weight: 400;
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
  font-weight: 400;
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
  justify-content: center;
`;

export const DivNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const DivMeioAzul = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 70vh;
  background: #90bdff;
`;

export const TextoEmCimaCaixas = styled.p`
  color: #fff4ea;
  font-size: 24px;
  font-family: Titan One;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 30px 0px 0px 50px;
`;

export const TextoEmAzul = styled.p`
  color: #435ebd;
  font-size: 20px;
  font-family: Titan One;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: start;
  margin: 30px 0px 0px 120px;
`;

export const Caixa = styled(Input)`
  width: 300px;
  margin: 0px 0px 0px 50px;
  background: #fff;
  padding: 4px 0px 5px 7px;
`;

export const Botao = styled(Button)`
  && {
    width: 300px;
    height: 54px;
    align-self: stretch;
    margin: 40px 0px 0px 50px;
    background-color: #F8D0AB;
    color: #fff;
    font-size: 24px;
    font-family: Titan One;
    font-style: normal;
    font-weight: bold;
    line-height: normal;

    :hover {
      background-color: #f7b679;
    }
  }
`;

export const Selecao = styled(Select)`
  width: 300px;
  height: 41px;
  margin: 0px 0px 0px 50px;
  background: #fff;
  padding: 4px 0px 5px 7px;
`;

export const Item = styled(MenuItem)``;


