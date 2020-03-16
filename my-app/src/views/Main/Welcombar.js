import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcomebar.module.scss';
const Welcombar = ({ userData }) => {
 return (
  <header className={styles.wrapper}>
   <div className={styles.welcomeBar}>
    <h2>Welcome {userData.loggIn}</h2>
    <h3>
     {userData.position} at {userData.company}
    </h3>
    <span>You have {0} buissnes cards</span>
   </div>
   <Link to="/addcontact">
    <button type="button" className={styles.addBtn}>
     add new contact.
    </button>
   </Link>
  </header>
 );
};

export default Welcombar;
