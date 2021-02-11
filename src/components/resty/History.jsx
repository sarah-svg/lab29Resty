import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url, method, id }) => {
  return (
    <section id={id}>
      <p id={id}>{url}</p>
      <p id={id}>{method}</p>
    </section>
  );
};


History.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired

};

export default History;

