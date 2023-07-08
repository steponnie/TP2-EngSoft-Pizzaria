import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const DivLogin = styled(DivTitulo)`
  gap: 30px;
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
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #435ebd;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0px;
`;

export const TextoAzul = styled.p`
  width: fit-content;
  font-family: "Titan One";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #435ebd;
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

export const TextoRosa = styled.p`
  height: 42px;
  font-family: "Titan One";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
  color: #f8d0ab;
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

export const TextoFrase = styled.p`
  width: fit-content;
  font-family: "Titan One";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #90bdff;
  margin: 0px;
`;

export const DivMenus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const DivMenuEscolha = styled.div`
  display: flex;
  width: 448px;
  height: 137px;
  background: ${(props) => (props.ativo === true ? "#F8d0AB" : "#FFF")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.ativo === true ? "#FFF" : "#F8d0AB")};
  font-size: 32px;
  font-family: Titan One;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #f7b679;
    color: #fff;
  }
`;

export const DivOpcoes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  row-gap: 40px;
  padding-bottom: 20px;
`;

export const OpcaoMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 448px;
  height: 177px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: #f0b47d;
    color: #fff;
  }
`;

export const OpcaoTitulo = styled.h2`
  font-size: 32px;
  font-family: Titan One;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

export const OpcaoTitulo2 = styled.h2`
  font-size: 24px;
  font-family: Titan One;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
