// teste

import { React, useState } from "react";
import { criarDado } from "./usuarios/cadastrar_usuario";

const App = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <div>
      <h1>Oi</h1>
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        </div>
        <div>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <div>
          <button onClick={() => criarDado(cpf, nome)}>Criar dado</button>
        </div>
      </div>
    </div>
  );
};

export { App };
