import { Route, Routes } from "react-router";
import Home from "./assets/pages/Home";
import Obras from "./assets/pages/Obras";
import CadastrarObras from "./assets/pages/CadastrarObras";
import PaginaNaoEncontrada from "./assets/pages/PaginaNaoEncontrada";
import MainLayout from "./assets/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/cadastro" element={<CadastrarObras />} />
        <Route path="/*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
