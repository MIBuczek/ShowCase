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

const MainContent = ({
 userId,
 users,
 contacts,
 handleEditContact,
 loadData
}) => (
 <main className={styles.wrapper}>
  <Welcombar userData={users} userId={userId} contactData={contacts} />
  <Mainbar
   userData={users}
   userId={userId}
   contactData={contacts}
   handleEditContact={handleEditContact}
   loadData={loadData}
  />
 </main>
);
const Addcontetn = ({ userId, loadData }) => (
 <main className={styles.wrapper}>
  <FormAddContact userId={userId} loadData={loadData} />
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
         userId={this.props.userId}
         users={this.props.users}
         contacts={this.props.contacts}
         handleEditContact={this.handleContactToEdit}
         loadData={this.props.loadData}
        />
       )}
      />
      <Route
       path="/addcontact"
       component={() => (
        <Addcontetn userId={this.props.userId} loadData={this.props.loadData} />
       )}
      />
      <Route
       path="/editcontact"
       component={() => (
        <Formedit
         userId={this.props.userId}
         editContact={this.state.contactToEdit}
         loadData={this.props.loadData}
        />
       )}
      />
      <Route
       path="/profile"
       component={() => (
        <Profile
         userId={this.props.userId}
         usersData={this.props.users}
         loadData={this.props.loadData}
        />
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
