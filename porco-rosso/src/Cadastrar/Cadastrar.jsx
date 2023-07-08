import { React, useState } from "react";
import {
  BackgroundDiv,
  Botao,
  Caixa,
  DivMeioAzul,
  DivMeioTela,
  DivNavLink,
  DivSuperior,
  DivTitulo,
  Item,
  Selecao,
  SubTitulo,
  TextoBranco,
  TextoEmAzul,
  TextoEmCimaCaixas,
  TiraAzul,
  Titulo,
} from "./estilos.js";
import { cadastrarPessoa, consultarBairros } from "../FirebaseUtils/Funcoes.js";

let bairros = [{ id: 1, nome: "Anchieta" }];
consultarBairros().then((res) => {
  bairros = res;
});

export const Cadastrar = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    senha: "",
    rua: "",
    bairro: "",
    numero: "",
    cep: "",
    complemento: "",
  });

  function fazerCadastro() {
    if (
      usuario.nome !== "" &&
      usuario.cpf !== "" &&
      usuario.dataNascimento !== "" &&
      usuario.telefone !== "" &&
      usuario.email !== "" &&
      usuario.senha !== "" &&
      usuario.rua !== "" &&
      usuario.bairro !== "" &&
      usuario.numero !== ""
    ) {
      cadastrarPessoa(usuario);
      setUsuario({
        nome: "",
        cpf: "",
        dataNascimento: "",
        telefone: "",
        email: "",
        senha: "",
        rua: "",
        bairro: "",
        numero: "",
        cep: "",
        complemento: "",
      });
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
          <TextoEmCimaCaixas>{"Nome completo *"}</TextoEmCimaCaixas>
          <Caixa
            value={usuario.nome}
            onChange={(e) => {
              setUsuario({ ...usuario, nome: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Data de nascimento *"}</TextoEmCimaCaixas>
          <Caixa
            type="date"
            value={usuario.dataNascimento}
            onChange={(e) => {
              setUsuario({ ...usuario, dataNascimento: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"CPF *"}</TextoEmCimaCaixas>
          <Caixa
            type="number"
            value={usuario.cpf}
            onChange={(e) => {
              setUsuario({ ...usuario, cpf: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Telefone *"}</TextoEmCimaCaixas>
          <Caixa
            type="tel"
            value={usuario.telefone}
            onChange={(e) => {
              setUsuario({ ...usuario, telefone: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Email *"}</TextoEmCimaCaixas>
          <Caixa
            type="email"
            value={usuario.email}
            onChange={(e) => {
              setUsuario({ ...usuario, email: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Senha *"}</TextoEmCimaCaixas>
          <Caixa
            type="password"
            value={usuario.senha}
            onChange={(e) => {
              setUsuario({ ...usuario, senha: e.target.value });
            }}
          />
        </DivMeioAzul>
        <DivMeioAzul>
          <TextoEmCimaCaixas>{"Rua *"}</TextoEmCimaCaixas>
          <Caixa
            value={usuario.rua}
            onChange={(e) => {
              setUsuario({ ...usuario, rua: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Número *"}</TextoEmCimaCaixas>
          <Caixa
            type="number"
            value={usuario.numero}
            onChange={(e) => {
              setUsuario({ ...usuario, numero: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Bairro *"}</TextoEmCimaCaixas>
          <Selecao
            value={usuario.bairro}
            onChange={(e) => {
              setUsuario({ ...usuario, bairro: e.target.value });
            }}
          >
            {bairros.map((item) => {
              return (
                <Item key={item.id} value={item.nome}>
                  {" "}
                  {item.nome}{" "}
                </Item>
              );
            })}
          </Selecao>
          <TextoEmCimaCaixas>{"CEP *"}</TextoEmCimaCaixas>
          <Caixa
            value={usuario.cep}
            onChange={(e) => {
              setUsuario({ ...usuario, cep: e.target.value });
            }}
          />
          <TextoEmCimaCaixas>{"Complemento"}</TextoEmCimaCaixas>
          <Caixa
            value={usuario.complemento}
            onChange={(e) => {
              setUsuario({ ...usuario, complemento: e.target.value });
            }}
          />
          <Botao
            onClick={() => {
              fazerCadastro();
            }}
          >
            {"Cadastrar"}
          </Botao>
          <DivNavLink to="/Login/Login">
            <TextoEmAzul>{"Já tem uma conta?"}</TextoEmAzul>
          </DivNavLink>
        </DivMeioAzul>
      </DivMeioTela>
    </BackgroundDiv>
  );
};
