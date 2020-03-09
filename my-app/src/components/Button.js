import React from 'react';
import styles from '../components/Button.module.scss';

const Button = ({ type, value, eventHandle }) => (
 <button className={styles.buttonNext} type={type} onClick={eventHandle}>
  {value}
 </button>
);

export default Button;
