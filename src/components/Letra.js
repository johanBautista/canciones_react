import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Letra = ({ letra }) => {
  if (letra.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra Cancion</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

Letra.protoTypes = {
  letra: PropTypes.string.isRequired,
};

export default Letra;
