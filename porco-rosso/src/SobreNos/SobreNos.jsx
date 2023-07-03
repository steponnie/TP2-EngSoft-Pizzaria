import { React } from "react";
import {
  BackgroundDiv,
  DivLogin,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  SubTitulo,
  TextoAzul,
  TextoBranco,
  TextoFrase,
  TextoRosa,
  TiraAzul,
  Titulo,
} from "./index.js";

const SobreNos = () => {
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
          <TextoRosa>
            {"sobre nós"}
          </TextoRosa>
        </DivNavLink>
      </TiraAzul>
      <DivMeioTela>
        <TextoFrase> 
          {"Quem é a Porco Rosso?"}
        </TextoFrase>
        <TextoFrase> 
          {"Porco Rosso é tudo de bom que a pizza proporciona!"}
        </TextoFrase>
      </DivMeioTela>
    </BackgroundDiv>
  );
};

export { SobreNos };
