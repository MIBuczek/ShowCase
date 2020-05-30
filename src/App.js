import React from 'react';
import styles from './App.module.scss';
import LogIn from './views/LogIn/LogIn';
import Header from './views/LogIn/Header';
import Motto from './views/LogIn/Motto';
import Footer from './views/LogIn/Footer';
import MainPannel from './views/Main/Main';
import data from './data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
 state = {
  users: [...data.users],
  userName: '',
  password: '',
  user: undefined
 };
 handleChangeLogIn = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleLoggin = e => {
  e.preventDefault();
  const matchingUser = this.state.users.find(user => {
   return (
    user.loggIn === this.state.userName && user.password === this.state.password
   );
  });
  this.setState({ user: matchingUser });
 };
 handleLogOut = e => {
  e.preventDefault();
  this.setState({ logIn: false });
 };
 render() {
  if (this.state.user === undefined) {
   return (
    <div className={styles.wrapper}>
     <Header />
     <Motto />
     <LogIn
      onChangeFn={e => this.handleChangeLogIn(e)}
      onClickFn={e => {
       this.handleLoggin(e);
      }}
      valueUser={this.state.userName}
      valuePassword={this.state.password}
     />
     <Footer />
    </div>
   );
  } else {
   return (
    <div className={styles.wrapper}>
     <MainPannel
      user={this.state.user}
      logOut={e => {
       this.handleLogOut(e);
      }}
     />
    </div>
   );
  }
 }
}

export default App;
