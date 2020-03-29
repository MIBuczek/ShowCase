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

const MainContent = () => (
 <main className={styles.wrapper}>
  <Welcombar />
  <Mainbar />
 </main>
);
const Addcontetn = () => (
 <main className={styles.wrapper}>
  <FormAddContact />
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
     <Navbar />
     <Switch>
      <Route exact path="/" component={() => <MainContent />} />
      <Route path="/addcontact" component={() => <Addcontetn />} />
      <Route path="/editcontact" component={() => <Formedit />} />
      <Route path="/profile" component={() => <Profile />} />
     </Switch>
     <Footer />
    </BrowserRouter>
   </>
  );
 }
}

export default MainPannel;
