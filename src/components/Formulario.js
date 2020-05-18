import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Formulario = ({ titulo, guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: '',
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;
  const actualizarState = (e) => {
    guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === '' || cancion.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? <Error mensaje="Todos los campos obligaatorios" /> : null}
      <form
        onSubmit={buscarInformacion}
        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
      >
        <fieldset>
          <legend className="text-center">{titulo}</legend>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Artista</label>
                <input
                  type="text"
                  className="form-control"
                  name="artista"
                  placeholder="Nombre Artista"
                  onChange={actualizarState}
                  value={artista}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Canción</label>
                <input
                  type="text"
                  className="form-control"
                  name="cancion"
                  placeholder="Nombre Canción"
                  onChange={actualizarState}
                  value={cancion}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Buscar
          </button>
        </fieldset>
      </form>
      <a
        href="https://lyricsovh.docs.apiary.io/#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Lyrics.ovh</p>
      </a>
      <a
        href="https://www.theaudiodb.com/api_guide.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Audio DB</p>
      </a>
    </div>
  );
};

Formulario.protoTypes = {
  titulo: PropTypes.string.isRequired,
  guardarBusquedaLetra: PropTypes.func.isRequired,
};

export default Formulario;
