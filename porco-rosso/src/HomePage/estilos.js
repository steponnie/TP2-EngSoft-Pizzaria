import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackgroundDiv = styled.div`
  background: #fff4ea;
  width: 100vw;
  height: 100vh;
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

export const DivMeioTela = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const DivPorcoRossoImg = styled.div`
  width: fit-content;
  height: fit-content;
  padding-top: 20px; 
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

export const DivCitacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DivNavLink = styled(NavLink)`
  text-decoration: none;
`;
