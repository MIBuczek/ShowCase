import React from 'react';
import styles from '../views/Main/Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const notLogIn = ()=>{
    return(
        <ul>
            <li className={styles.navPanelLink}>
                <NavLink exact to="/signup">sing up.</NavLink>
            </li>
            <li className={styles.navPanelLink}>
                <NavLink to="/login">log in.</NavLink>
            </li>
        </ul>
    );
}

export default notLogIn;