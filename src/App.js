import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios.get(url);

      guardarLetra(resultado.data.lyrics);
    };

    consultarApiLetra();
  }, [busquedaletra]);

  return (
    <Fragment>
      <div className="section">
        <Formulario
          titulo="Buscador Letra Canciones"
          guardarBusquedaLetra={guardarBusquedaLetra}
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">1</div>
          <div className="col-md-6">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
