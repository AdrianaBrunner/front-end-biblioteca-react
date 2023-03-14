import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAutor, postAutor, putAutor } from "../../services/server";

export function AutoresAtualizar() {
  const [autores, setAutores] = useState<any>();

  const params = useParams();

  if (!autores) {
    getAutor(parseInt(params.id || "", 10)).then((res) => setAutores(res.data));
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putAutor({
      idAutor: autores.idAutor,
      nomeAutor: data.nomeAutor.toString(),
      sobrenomeAutor: data.sobrenomeAutor.toString(),
      dataNascimento: data.dataNascimento.toString(),
    });
    alert("Autor Atualizado!");
  };

  return (
    <div className="atualizar">
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome</span>
          <input
            type="text"
            name="nomeAutor"
            defaultValue={autores?.nomeAutor}
          />
        </div>

        <div>
          <span>Sobrenome </span>
          <input
            type="text"
            name="sobrenomeAutor"
            defaultValue={autores?.sobrenomeAutor}
          />
        </div>

        <div>
          <span>Data de Nascimento </span>
          <input
            type="text"
            name="dataNascimento"
            defaultValue={autores?.dataNascimento}
          />
        </div>

        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
