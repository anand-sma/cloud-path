import React from 'react';
import styles from '../styles/NotFound.module.scss';
function Notfound() {
  return (
    <div className={`${styles.err}`}>
      <h2>Oooops! page not found</h2>
    </div>
  );
}

export default Notfound;
