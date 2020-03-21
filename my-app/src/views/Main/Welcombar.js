import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcomebar.module.scss';

class Welcombar extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   userContacts: 0
  };
 }
 componentDidMount() {
  const userContacts = this.props.contactData.filter(contact => {
   return (
    contact.userId === this.props.userData[this.props.userId].id && contact
   );
  });
  this.setState({ userContacts: [...userContacts].length });
 }
 render() {
  return (
   <header className={styles.wrapper}>
    <div className={styles.welcomeBar}>
     <h2>Welcome {this.props.userData[this.props.userId].loggIn}</h2>
     <h3>
      {this.props.userData[this.props.userId].position} at{' '}
      {this.props.userData[this.props.userId].company}
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
