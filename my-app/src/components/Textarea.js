import React from 'react';
import styles from '../components/Textarea.module.scss';

const Texarea = ({ type, placeholder, value, onChange, name }) => (
 <textarea
  className={styles.textarea}
  type={type}
  placeholder={placeholder}
  name={name}
  value={value}
  onChange={onChange}
 />
);

export default Texarea;
