import React from 'react';
import styles from '../views/Main/Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authAction';

const logIn = (props) =>{
    console.log(props.id)
    return(    
        <ul>
            <li className={styles.navPanelLink}>
                <NavLink exact to="/"> contacts.</NavLink>
            </li>
            <li className={styles.navPanelLink}>
                <NavLink to={"/profile/"+ props.id}>profil.</NavLink>
            </li>
            <li className={styles.navPanelLink}>
                <a href='#' onClick={props.signOut}>log out. </a>
            </li>
        </ul>
    );
}

const mapDispatchToProps = ( dispatch )=>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(logIn);