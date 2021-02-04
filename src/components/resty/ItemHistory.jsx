import React from 'react';
import PropTypes from 'prop-types';

const ItemHistory = ({ method, url, id }) => {
  return (
    <article id={id}>
      <div id={id}>{method}</div>
      <div id={id}>{url}</div>
    </article>

  );
};

ItemHistory.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ItemHistory;


