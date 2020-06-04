import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcomebar.module.scss';

const Welcombar = (props)=>{
    const { user, contacts } = props;
    return (
        <header className={styles.wrapper}>
            <div className={styles.welcomeBar}>
                <h2>Welcome {user.name}</h2>
                <h3> {user.position} at {user.company}</h3>
                <span>You have buissnes cards {contacts.length}</span>
            </div>
            <Link to="/addcontact">
                <button type="button" className={styles.addBtn}>
                add new contact.
                </button>
            </Link>
        </header>
    );
}

export default Welcombar;
 

