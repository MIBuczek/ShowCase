import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcomebar.module.scss';

class Welcombar extends React.Component {

 componentDidMount() {
 }
 render() {
  return (
   <header className={styles.wrapper}>
    <div className={styles.welcomeBar}>
     <h2>Welcome </h2>
     <h3> Position and company</h3>
     <span>You have buissnes cards</span>
    </div>
    <Link to="/addcontact">
     <button type="button" className={styles.addBtn}>
      add new contact.
     </button>
    </Link>
   </header>
  );
 }
}

export default Welcombar;
