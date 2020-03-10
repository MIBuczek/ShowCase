import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Welcombar from './Welcombar';
import Mainbar from './Mainbar';
import Footer from '../LogIn/Footer';
import FormAddContact from './Formadd';
import Profile from './Profile';
import styles from './MainPannel.module.scss';

const MainContent = ({ user }) => (
 <main className={styles.wrapper}>
  <Welcombar userData={user} />
  <Mainbar userData={user} />
 </main>
);
const Addcontetn = () => (
 <main className={styles.wrapper}>
  <FormAddContact />
 </main>
);

const MainPannel = ({ user, logOut }) => {
 return (
  <>
   <BrowserRouter>
    <Navbar logOut={logOut} />
    <Switch>
     <Route exact path="/" component={() => <MainContent user={user} />} />
     <Route path="/addcontact" component={Addcontetn} />
     <Route path="/profile" component={() => <Profile user={user} />} />
    </Switch>
    <Footer />
   </BrowserRouter>
  </>
 );
};

export default MainPannel;
