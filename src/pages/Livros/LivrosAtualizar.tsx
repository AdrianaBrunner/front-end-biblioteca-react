import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLivro, postLivro, putLivro } from "../../services/server";

export function LivrosAtualizar() {
  const [livros, setLivros] = useState<any>();

  const params = useParams();

  if (!livros) {
    getLivro(parseInt(params.id || "", 10)).then((res) => setLivros(res.data));
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putLivro({
      idLivro: livros.idLivro,
      titulo: data.titulo.toString(),
      numeroEdicao: parseInt(data.numeroEdicao.toString()),
      anoLancamento: parseInt(data.anoLancamento.toString()),
      idAutor: parseInt(data.idAutor.toString()),
      idEditora: parseInt(data.idEditora.toString())
    });
    alert("Livro Atualizado!");
  };

  return (
    <div className="atualizar">
      <form onSubmit={onSubmit}>
        <div>
          <span>Titulo</span>
          <input
            type="text"
            name="titulo"
            defaultValue={livros?.titulo}
          />
        </div>

        <div>
          <span>N° Edição </span>
          <input
            type="number"
            name="numeroEdicao"
            defaultValue={livros?.numeroEdicao}
          />
        </div>

        <div>
          <span>Ano Lançamento </span>
          <input
            type="number"
            name="anoLancamento"
            defaultValue={livros?.anoLancamento}
          />
        </div>

        <div>
          <span>ID Autor </span>
          <input
            type="number"
            name="idAutor"
            defaultValue={livros?.idAutor}
          />
        </div>

        <div>
          <span>ID Editora </span>
          <input
            type="number"
            name="idEditora"
            defaultValue={livros?.idEditora}
          />
        </div>

        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
