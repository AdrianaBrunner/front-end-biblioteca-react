import { postLivro } from "../../services/server";
import "./LivrosNovo.css"

export function LivrosNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postLivro({
      titulo: data.titulo.toString(),
      numeroEdicao: parseInt(data.numeroEdicao.toString()),
      anoLancamento: parseInt(data.anoLancamento.toString()),
      idAutor: parseInt(data.idAutor.toString()),
      idEditora: parseInt(data.idEditora.toString())
    });
    alert("Livro Salvo!")
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Titulo do Livro </span>
        <input type="text" name="titulo" />
      </div>

      <div>
        <span>N° Edicao </span>
        <input type="number" name="numeroEdicao" />
      </div>

      <div>
        <span>Ano Lancamento </span>
        <input type="number" name="anoLancamento" />
      </div>

      <div>
        <span>ID Autor</span>
        <input type="number" name="idAutor" />
      </div>

      <div>
        <span>ID Editora</span>
        <input type="number" name="idEditora" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  )
}