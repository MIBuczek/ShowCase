import React from 'react';
import styles from './App.module.scss';
import LoginPannel from './views/LogIn/LogInPannel';
import MainPannel from './views/Main/MainPannel';

class App extends React.Component {
 state = {
  users: [],
  contacts: [],
  userName: '',
  password: '',
  user: undefined
 };

 componentDidMount() {
  fetch(`http://localhost:4000/users`)
   .then(resp => resp.json())
   .then(resp => {
    return this.setState({ users: [...resp] });
   });
  fetch(`http://localhost:4000/contacts`)
   .then(resp => resp.json())
   .then(resp => {
    return this.setState({ contacts: [...resp] });
   });
 }
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
  this.setState({ user: undefined });
 };
 render() {
  if (this.state.user === undefined) {
   return (
    <div className={styles.wrapper}>
     <LoginPannel
      onChangeFn={e => this.handleChangeLogIn(e)}
      onClickFn={e => {
       this.handleLoggin(e);
      }}
      valueUser={this.state.userName}
      valuePassword={this.state.password}
     />
    </div>
   );
  } else {
   return (
    <div className={styles.wrapper}>
     <MainPannel
      user={this.state.user}
      contacts={this.state.contacts}
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

//Usuwanie kontaktu z usera
//Szukanie po kraju/profesji/nazwie -> bład
//fetch --> Json serwer --> firebase
//refactoring
//deploing-->netlify
