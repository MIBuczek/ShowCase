import React from 'react';
import styles from '../components/Input.module.scss';

const Input = ({ type, placeholder, value, onChange, name, size }) => (
 <input className={size === 'short' ? styles.inputShort : styles.inputLong}
  type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
);

export default Input;
