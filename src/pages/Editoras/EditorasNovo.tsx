import { postEditora } from "../../services/server";

export function EditorasNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postEditora({
      nomeEditora: data.nomeEditora.toString(),
      cnpj: data.cnpj.toString()
    });
    alert("Editora Salva!")
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome da Editora </span>
        <input type="text" name="nomeEditora" />
      </div>

      <div>
        <span>CNPJ </span>
        <input type="text" name="cnpj" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  )
}