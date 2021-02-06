import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Display.css';
// data-testid="display" 
const Display = ({ displayJSON }) => {
  return (
    <pre className={styles.Display}>
      <ReactJson src={displayJSON}  />
      
    </pre>
  );
};

Display.propTypes = {
  displayJSON: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired
};

export default Display;
