import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Autores } from "./pages/Autores/Autores";
import { AutoresVer } from "./pages/Autores/AutoresVer";
import { AutoresNovo } from "./pages/Autores/AutoresNovo";
import { AutoresAtualizar } from "./pages/Autores/AutoresAtualizar";
import { Livros } from "../src/pages/Livros/Livros";
import "./App.css";
import { LivrosVer } from "./pages/Livros/LivrosVer";
import { LivrosNovo } from "./pages/Livros/LivrosNovo";
import { LivrosAtualizar } from "./pages/Livros/LivrosAtualizar";
import { Editoras } from "./pages/Editoras/Editoras";
import { EditorasVer } from "./pages/Editoras/EditorasVer";
import { EditorasNovo } from "./pages/Editoras/EditorasNovo";
import { EditorasAtualizar } from "./pages/Editoras/EditorasAtualizar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <div id="links">
          <img src="../../src/images/livro.png" width="120px" alt="" />
          <a href="/home">Home</a>|<a href="/autores">Lista de Autores</a>|
          <a href="/autores-criar">Cadastrar Autor</a>|
          <a href="/livros">Lista de Livros</a>|
          <a href="/livros-criar">Cadastrar Livro</a>|
          <a href="/editoras">Lista de Editoras</a>|
          <a href="/editoras-criar">Criar Editora</a>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/autores/:id" element={<AutoresVer />} />
          <Route path="/autores-criar" element={<AutoresNovo />} />
          <Route path="/autores-atualizar/:id" element={<AutoresAtualizar />} />

          <Route path="/livros" element={<Livros />} />
          <Route path="/livros/:id" element={<LivrosVer />} />
          <Route path="/livros-criar" element={<LivrosNovo />} />
          <Route path="/livros-atualizar/:id" element={<LivrosAtualizar />} />

          <Route path="/editoras" element={<Editoras />} />
          <Route path="/editoras/:id" element={<EditorasVer />} />
          <Route path="/editoras-criar" element={<EditorasNovo />} />
          <Route
            path="/editoras-atualizar/:id"
            element={<EditorasAtualizar />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
