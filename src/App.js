import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
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
