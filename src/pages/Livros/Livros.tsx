import axios from "axios";
import { useEffect, useState } from "react";
import { deleteLivro, getTodosLivros } from "../../services/server";
import { Livro } from "../../model/Livro";
import "./Livros.css";

export function Livros() {
  const [livros, setLivros] = useState<Livro[]>();

  const loadData = async () => {
    const livros: Livro[] = await getTodosLivros();
    setLivros(livros);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteLivro = (id?: number) => {
    deleteLivro(id).then(() => loadData());
  };

  return (
    <div className="table">
      <span>Livros</span>
      <table>
        <thead>
          <td>ID Livro</td>
          <td>Titulo</td>
          <td>N° Edicao</td>
          <td>Ano Lançamento</td>
          <td>ID Autor</td>
          <td>ID Editora</td>
        </thead>
        <tbody id="tbody">
          {livros?.map((livro) => {
            return (
              <tr>
                <td>{livro.idLivro}</td>
                <td id="titulo">{livro.titulo}</td>
                <td>{livro.numeroEdicao}</td>
                <td>{livro.anoLancamento}</td>
                <td>{livro.idAutor}</td>
                <td>{livro.idEditora}</td>
                <td>
                  <a className="ver" href={`/livros/${livro.idLivro}`}>Ver</a>
                </td>
                <td>
                  <a className="ver" href={`/livros-atualizar/${livro.idLivro}`}>Atualizar</a>
                </td>
                <td>
                  <button onClick={() => onClickDeleteLivro(livro?.idLivro)}>
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
