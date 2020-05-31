import React from 'react';
import LogoSC from '../../assets/logoShowCase.png';
import styles from './Navbar.module.scss';
import LogIn from '../../components/LogIn';
import NotLogIt from '../../components/NotLogIn';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
 return (
  <header className={styles.wrapper}>
   <img className={styles.logoSC} src={LogoSC} alt="logo show case" />
   <nav className={styles.navPanel}>
     { auth.uid ? <LogIn/> : <NotLogIt/> }
    </nav>
  </header>
 );
};

const mapStateToProps = ( state )=>{
    return{
      auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
