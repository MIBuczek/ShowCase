import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcomebar.module.scss';

class Welcombar extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   user: {
    loggIn: '',
    password: '',
    company: '',
    proffesion: '',
    position: '',
    id: 1
   },
   userContacts: 0
  };
 }
 componentDidMount() {
  const currnetUser = this.props.userData.find(user => {
   if (user.userId === this.props.userId) {
    return user;
   }
   return null;
  });
  const userContacts = this.props.contactData.filter(contact => {
   if (contact.userId === this.props.userId) {
    return contact;
   }
   return null;
  });
  this.setState({ user: currnetUser, userContacts: [...userContacts].length });
 }
 render() {
  return (
   <header className={styles.wrapper}>
    <div className={styles.welcomeBar}>
     <h2>Welcome {this.state.user.loggIn}</h2>
     <h3>
      {this.state.user.position} at {this.state.user.company}
     </h3>
     <span>You have {this.state.userContacts} buissnes cards</span>
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
