import { React, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/Auth.jsx";
import {
  BackgroundDiv,
  Botao,
  Caixa,
  DivMeioAzul,
  DivMeioRosa,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  SubTitulo,
  TextoAzul,
  TextoBemVindo,
  TextoBranco,
  TextoEntrarBranco,
  TextoRosaBranco,
  TiraAzul,
  Titulo,
} from "./estilos.js";
import { consultarPessoa } from "../FirebaseUtils/Funcoes.js";

export const Login = () => {
  const [usuarios, setUsuario] = useState([])
  const userCredenciais = useContext(AuthContext);
  const [user, setUser] = useState(userCredenciais.user);

  function fazerLogin() {
    consultarPessoa().then(res => setUsuario(res));
    for (let index = 0; index < usuarios.length; index++) {
      const email = usuarios[index]['email'];
      const senha = usuarios[index]['senha'];
      if (email === user.email && senha === user.senha) {
        userCredenciais.setUserInfo({...user, email: email, senha: senha});
        
      }
    }
  }

  if(userCredenciais.user.email) {
    return <Navigate replace to="/Menu/Menu" />;
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
      </DivSuperior>
      <TiraAzul>
        <DivNavLink to="/Menu/Menu">
          <TextoBranco>{"menu"}</TextoBranco>
        </DivNavLink>
        <DivNavLink to="/SobreNos/SobreNos">
          <TextoBranco>{"sobre nós"}</TextoBranco>
        </DivNavLink>
      </TiraAzul>
      <DivMeioTela>
        <DivMeioAzul>
          <TextoEntrarBranco>{"Entrar:"}</TextoEntrarBranco>
          <TextoBemVindo>{"Bem-vindo(a) de volta!"}</TextoBemVindo>
        </DivMeioAzul>
        <DivMeioRosa>
          <TextoRosaBranco>{"Email"}</TextoRosaBranco>
          <Caixa
            placeholder="Insira seu email aqui..."
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <TextoRosaBranco>{"Senha"}</TextoRosaBranco>
          <Caixa
            placeholder="Insira sua senha..."
            type="password"
            value={user.senha}
            onChange={(e) => {
              setUser({ ...user, senha: e.target.value });
            }}
          />
          <Botao variant="contained" onClick={() => {fazerLogin()}}>
            {"Entrar"}
          </Botao>
          <DivNavLink to="/Cadastrar/Cadastrar">
            <TextoAzul>{"Criar uma conta"}</TextoAzul>
          </DivNavLink>
        </DivMeioRosa>
      </DivMeioTela>
    </BackgroundDiv>
  );
};
