import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <div className="section">
        <Formulario titulo="Buscador Letra Canciones" />
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
