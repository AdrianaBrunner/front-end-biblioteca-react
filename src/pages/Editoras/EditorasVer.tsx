import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEditora } from '../../services/server';

export function EditorasVer() {
  const [ editora, setEditora ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!editora) {
    getEditora(parseInt(params.id||'', 10))
      .then(res => setEditora(res.data));
  }

  return (
    <div className="lista">
      <span>Editora</span>
      <div>
        <span>ID Editora  </span>  
        <input type="number" value={editora?.idEditora} />
      </div>
      <div>
        <span>Nome Editora  </span>
        <input type="text" value={editora?.nomeEditora} />
      </div>
      <div>
        <span>CNPJ </span>
        <input type="text" value={editora?.cnpj} />
      </div>
    </div>
  )
}