import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSC from '../../assets/logoShowCase.png';
import styles from './Navbar.module.scss';

const HeaderNavigation = ({ logOut }) => (
 <nav className={styles.navPanel}>
  <ul>
   <li className={styles.navPanelLink}>
    <NavLink exact to="/">
     contacts.
    </NavLink>
   </li>
   <li className={styles.navPanelLink}>
    <NavLink to="/profile">profil.</NavLink>
   </li>
   <li className={styles.navPanelLink}>
    <a onClick={logOut}>log out.</a>
   </li>
  </ul>
 </nav>
);

const Navbar = ({ logOut }) => {
 return (
  <header className={styles.wrapper}>
   <img className={styles.logoSC} src={LogoSC} alt="logo show case" />
   <HeaderNavigation logOut={logOut} />
  </header>
 );
};

export default Navbar;
