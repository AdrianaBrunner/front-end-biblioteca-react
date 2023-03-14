import { postAutor } from "../../services/server";
import './AutoresNovo.css'

export function AutoresNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postAutor({
      nomeAutor: data.nomeAutor.toString(),
      sobrenomeAutor: data.sobrenomeAutor.toString(),
      dataNascimento: data.dataNascimento.toString(),
    });
    alert("Autor Salvo!")
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome </span>
        <input type="text" name="nomeAutor" />
      </div>

      <div>
        <span>Sobrenome </span>
        <input type="text" name="sobrenomeAutor" />
      </div>

      <div>
        <span>Data de Nascimento </span>
        <input type="text" name="dataNascimento" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  )
}