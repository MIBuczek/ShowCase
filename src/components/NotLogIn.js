import React from 'react';
import styles from '../views/Main/Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const notLogIn = ()=>{
    return(
        <ul>
            <li className={styles.navPanelLink}>
                <NavLink exact to="/signin">sing in.</NavLink>
            </li>
            <li className={styles.navPanelLink}>
                <NavLink to="/signup">sing up.</NavLink>
            </li>
        </ul>
    );
}

export default notLogIn;