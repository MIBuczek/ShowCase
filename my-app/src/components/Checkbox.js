import React from 'react';
import styles from '../components/Checkbox.module.scss';

const Checkbox = ({ type, name }) => (
 <label forHtml={name} className={styles.requalationLabel}>
  <input className={styles.requalationCheckBox} type={type} name={name} />I
  accept all regulation on the showcase app.
 </label>
);

export default Checkbox;
