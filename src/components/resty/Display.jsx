import React from 'react';
import PropTypes from 'prop-types';

const  Display = ({ display }) =>  {
  return (
    <div>
      <pre className={StyleSheet.Display} >
        <href src={display} displayDataTypes={false} />
      </pre>  
    </div>
  );
};

Display.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Display;

