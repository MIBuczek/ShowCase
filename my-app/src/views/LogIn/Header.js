import React from 'react';
import styles from '../LogIn/Header.module.scss';
import LogoShowCase from '../../assets/logoShowCase.png';

const Header = () => (
 <header className={styles.headerWrapper}>
  <div className={styles.headerLogo}>
   <img src={LogoShowCase} alt="logo show case" />
  </div>
 </header>
);
export default Header;
