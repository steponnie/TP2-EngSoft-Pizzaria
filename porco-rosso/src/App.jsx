import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { Login } from "./Login/Login";
import { Cadastrar } from "./Cadastrar/Cadastrar";
import { SobreNos } from "./SobreNos/SobreNos";
import { Menu } from "./Menu/Menu";
import { MenuBebida } from "./Menu/MenuBebida";
import { MenuCombo } from "./Menu/MenuCombo";
import { MenuMontarPizza } from "./Menu/MenuMontarPizza";
import { Carrinho } from "./Carrinho/Carrinho";
import { AuthProvider } from "./Context/Auth";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Login/Login" element={<Login />} />
          <Route exact path="/Cadastrar/Cadastrar" element={<Cadastrar />} />
          <Route exact path="/SobreNos/SobreNos" element={<SobreNos />} />
          <Route exact path="/Menu/Menu" element={<Menu />} />
          <Route exact path="/Menu/MenuBebida" element={<MenuBebida />} />
          <Route exact path="/Menu/MenuCombo" element={<MenuCombo />} />
          <Route exact path="/Menu/MenuMontarPizza" element={<MenuMontarPizza />} />
          <Route exact path="/Carrinho/Carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export { App };
