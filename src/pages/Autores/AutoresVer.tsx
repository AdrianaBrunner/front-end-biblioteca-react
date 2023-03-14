import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAutor } from '../../services/server';
import './AutoresVer.css'

export function AutoresVer() {
  const [ autor, setAutor ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!autor) {
    getAutor(parseInt(params.id||'', 10))
      .then(res => setAutor(res.data));
  }

  return (
    <div className="lista">
      <span>Autor</span>
      <div>
        <span>ID do Autor  </span>  
        <input type="text" value={autor?.idAutor} />
      </div>
      <div>
        <span>Nome  </span>
        <input type="text" value={autor?.nomeAutor} />
      </div>
      <div>
        <span>Sobrenome  </span>
        <input type="text" value={autor?.sobrenomeAutor} />
      </div>
      <div>
        <span>Data de Nascimento  </span>
        <input type="text" value={autor?.dataNascimento} />
      </div>


    </div>
  )
}