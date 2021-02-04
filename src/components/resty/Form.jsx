import React from 'react';
import PropTypes  from 'prop-types';
import styles from './Form.css';


const Form = ({ url, method, body, onSubmit, onChange  }) => {
  return (
    <section>
      <form onSubmit={onSubmit} className={styles.Form}>
        <input type="text" className={styles.url}
          name="url" placeholder="YOUR URL" value={url}
          onChange={onChange}/>
        <span>
          <div>
            {/* GET  METHOD ON CHANGE*/}
            <input type="radio" id="get" name="method" value="GET"
              checked={method === 'GET'}
              onChange={onChange} />
            <label htmlFor="get">GET</label>
            {/* POST  METHOD ON CHANGE*/}
            <input type="radio" id="post" name="method" value="POST"
              checked={method === 'POST'}
              onChange={onChange} />
            <label htmlFor="post">POST</label>
            {/* PUT  METHOD ON CHANGE*/}
            <input type="radio" id="put" name="method" value="PUT"
              checked={method === 'PUT'}
              onChange={onChange} />
            <label htmlFor="put">PUT</label>
            {/* PATCH  METHOD ON CHANGE*/}
            <input type="radio" id="patch" name="method" value="PATCH"
              checked={method === 'PATCH'}
              onChange={onChange} />
            <label htmlFor="patch">PATCH</label>
            {/* DELETE  METHOD ON CHANGE*/}
            <input type="radio" id="delete" name="method" value="DELETE"
              checked={method === 'DELETE'}
              onChange={onChange} />
            <label htmlFor="delete">DELETE</label>
          </div>
          <button>HIT!</button>
        </span>
        <textarea placeholder="RAW" name="body"
          value={body} onChange={onChange}></textarea>

      </form>
    </section>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired


};

export default Form;
