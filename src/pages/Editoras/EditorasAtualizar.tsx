import { useState } from "react";
import { useParams } from "react-router-dom";
import { getEditora, postEditora, putEditora } from "../../services/server";

export function EditorasAtualizar() {
  const [editoras, setEditoras] = useState<any>();

  const params = useParams();

  if (!editoras) {
    getEditora(parseInt(params.id || "", 10)).then((res) =>
      setEditoras(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putEditora({
      idEditora: editoras.idEditora,
      nomeEditora: data.nomeEditora.toString(),
      cnpj: data.cnpj.toString(),
    });
    alert("Editora Atualizado!");
  };

  return (
    <div className="atualizar">
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome Editora</span>
          <input
            type="text"
            name="nomeEditora"
            defaultValue={editoras?.nomeEditora}
          />
        </div>

        <div>
          <span>CNPJ </span>
          <input type="text" name="cnpj" defaultValue={editoras?.cnpj} />
        </div>

        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
