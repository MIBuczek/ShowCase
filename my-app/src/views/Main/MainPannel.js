import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Welcombar from './Welcombar';
import Mainbar from './Mainbar';
import Footer from '../LogIn/Footer';
import FormAddContact from './Formadd';
import Profile from './Profile';
import Formedit from './Formedit';
import styles from './MainPannel.module.scss';

const MainContent = ({ user, contacts, handleEditContact }) => (
 <main className={styles.wrapper}>
  <Welcombar userData={user} contactData={contacts} />
  <Mainbar
   userData={user}
   contactData={contacts}
   handleEditContact={handleEditContact}
  />
 </main>
);
const Addcontetn = ({ user }) => (
 <main className={styles.wrapper}>
  <FormAddContact user={user} />
 </main>
);

class MainPannel extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   contactToEdit: undefined
  };
 }
 handleContactToEdit = (e, userContacts) => {
  e.preventDefault();
  this.setState({ contactToEdit: userContacts });
 };
 render() {
  return (
   <>
    <BrowserRouter>
     <Navbar logOut={this.props.logOut} />
     <Switch>
      <Route
       exact
       path="/"
       component={() => (
        <MainContent
         user={this.props.user}
         contacts={this.props.contacts}
         handleEditContact={this.handleContactToEdit}
        />
       )}
      />
      <Route
       path="/addcontact"
       component={() => <Addcontetn user={this.props.user} />}
      />
      <Route
       path="/editcontact"
       component={() => <Formedit editContact={this.state.contactToEdit} />}
      />
      <Route
       path="/profile"
       component={() => (
        <Profile user={this.props.user} loadData={this.props.loadData} />
       )}
      />
     </Switch>
     <Footer />
    </BrowserRouter>
   </>
  );
 }
}

export default MainPannel;
