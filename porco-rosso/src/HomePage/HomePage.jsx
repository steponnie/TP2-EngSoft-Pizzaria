import { React } from "react";
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
} from "./index.js";
import { PorcoRossoComendoSVG, PorcoRossoAviaoSVG } from "../imgs/index.jsx";

const HomePage = () => {
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
          <DivNavLink
            to="/Login/Login"
            >
            <TextoAzul>{"Entrar"}</TextoAzul>
          </DivNavLink>
          <DivNavLink
            to="/Cadastrar/Cadastrar"
            >
            <TextoAzul>{"Cadastrar"}</TextoAzul>
          </DivNavLink>
        </DivLogin>
      </DivSuperior>
      <TiraAzul>
        <TextoBranco>{"menu"}</TextoBranco>
        <DivNavLink
          to="/SobreNos/SobreNos">
          <TextoBranco>
            {"sobre nós"}
          </TextoBranco>
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

export { HomePage };
