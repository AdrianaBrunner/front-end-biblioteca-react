import axios from "axios"
import { useEffect, useState } from "react";
import { deleteAutor, getTodosAutores } from "../../services/server"
import { Autor } from "../../model/Autor";
import './Autores.css'

export function Autores() {
  const [ autores, setAutores ] = useState<Autor[]>();

  const loadData = async () => {
    const autores : Autor[] = await getTodosAutores();
    setAutores(autores);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAutor = (id?: number) => {
    deleteAutor(id).then(() => loadData());
  }

  return (
    <div className="table">
      <span>Autores</span>
      <table>
        <thead>
          <td>ID autor</td>
          <td>Nome</td>
          <td>Sobrenome</td>
          <td>Data Nascimento</td>
        </thead>
        <tbody>
          {
            autores?.map(autor => {
              return (
                <tr>
                  <td>{autor.idAutor}</td>
                  <td>{autor.nomeAutor}</td>
                  <td>{autor.sobrenomeAutor}</td>
                  <td>{autor.dataNascimento}</td>
                  <td><a className="ver" href={`/autores/${autor.idAutor}`}>Ver</a></td>
                  <td>
                  <a className="ver" href={`/autores-atualizar/${autor.idAutor}`}>
                    Atualizar
                  </a>
                </td>
                  <button onClick={() => onClickDeleteAutor(autor?.idAutor)}>Excluir</button>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}