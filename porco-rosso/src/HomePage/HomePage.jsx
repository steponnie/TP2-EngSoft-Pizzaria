import { React } from "react";
import {
  BackgroundDiv,
  DivCitacao,
  DivLogin,
  DivMeioTela,
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
          <Titulo>{"Porco Rosso"}</Titulo>
          <SubTitulo>{"Pizzaria"}</SubTitulo>
        </DivTitulo>
        <DivLogin>
          <TextoAzul>{"Entrar"}</TextoAzul>
          <TextoAzul>{"Cadastro"}</TextoAzul>
        </DivLogin>
      </DivSuperior>
      <TiraAzul>
        <TextoBranco>{"menu"}</TextoBranco>
        <TextoBranco>{"sobre nós"}</TextoBranco>
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
