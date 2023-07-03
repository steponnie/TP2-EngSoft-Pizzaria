import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { Login } from "./Login/Login";
import { Cadastrar } from "./Cadastrar/Cadastrar";
import { SobreNos } from "./SobreNos/SobreNos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Login/Login" element={<Login />} />
        <Route exact path="/Cadastrar/Cadastrar" element={<Cadastrar />} />
        <Route exact path="/SobreNos/SobreNos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
