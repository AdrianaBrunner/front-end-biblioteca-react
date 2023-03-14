import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLivro } from "../../services/server";
import { getTodosAutores } from "../../services/server";
import { Autor } from "../../model/Autor";
import "./LivrosVer.css"

export function LivrosVer() {
  const [livro, setLivro] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!livro) {
    getLivro(parseInt(params.id || "", 10)).then((res) => setLivro(res.data));
  }

  const [autores, setAutores] = useState<Autor[]>([]);

  const loadAutores = async () => {
    const autores = await getTodosAutores();
    setAutores(autores);
  };

  useEffect(() => {
    loadAutores();
  }, []);

  return (
    <div className="lista">
      <span>Livro</span>
      <div>
        <span>ID do Livro </span>
        <input type="number" value={livro?.idLivro} />
      </div>
      <div>
        <span>Titulo </span>
        <input type="text" value={livro?.titulo} />
      </div>
      <div>
        <span>N° Edicao </span>
        <input type="number" value={livro?.numeroEdicao} />
      </div>
      <div>
        <span>Ano Lancamento </span>
        <input type="number" value={livro?.anoLancamento} />
      </div>
      <div>
        <span>ID Autor </span>
        <input type="number" value={livro?.idAutor} />
      </div>
      <div>
        <span>ID Editora </span>
        <input type="number" value={livro?.idEditora} />
      </div>
      <br />
      <h2>Dados do Autor deste Livro</h2>
      <div>
        <span className="nomeAutor">Nome Autor: </span>
        {autores.map((autor) => {
          if (livro.idAutor == autor.idAutor) {
            return (
              <span className="nomeAutor">
                {autor.nomeAutor} {autor.sobrenomeAutor}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
