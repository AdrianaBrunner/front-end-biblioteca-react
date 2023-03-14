import axios from "axios";
import { useEffect, useState } from "react";
import { deleteEditora, getTodasEditoras } from "../../services/server";
import { Editora } from "../../model/Editora";

export function Editoras() {
  const [editoras, setEditoras] = useState<Editora[]>();

  const loadData = async () => {
    const editoras: Editora[] = await getTodasEditoras();
    setEditoras(editoras);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteEditora = (id?: number) => {
    deleteEditora(id).then(() => loadData());
  };

  return (
    <div className="table">
      <span>Editoras</span>
      <table>
        <thead>
          <td>ID Editora</td>
          <td>Nome Editora</td>
          <td>CNPJ</td>
        </thead>
        <tbody id="tbody">
          {editoras?.map((editora) => {
            return (
              <tr>
                <td>{editora.idEditora}</td>
                <td>{editora.nomeEditora}</td>
                <td>{editora.cnpj}</td>
                <td>
                  <a className="ver" href={`/editoras/${editora.idEditora}`}>Ver</a>
                </td>
                <td>
                  <a className="ver" href={`/editoras-atualizar/${editora.idEditora}`}>Atualizar</a>
                </td>
                <td>
                  <button onClick={() => onClickDeleteEditora(editora?.idEditora)}>
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
