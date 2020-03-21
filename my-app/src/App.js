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
  userId: undefined
 };

 loadData = () => {
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
 };

 componentDidMount() {
  this.loadData();
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
  if (matchingUser) {
   this.setState({ userName: '', password: '', userId: matchingUser.id - 1 });
  } else {
   this.setState({ userId: undefined });
  }
 };
 handleLogOut = e => {
  e.preventDefault();
  this.setState({ userId: undefined });
 };
 render() {
  if (this.state.userId === undefined) {
   return (
    <div className={styles.wrapper}>
     <LoginPannel
      onChangeFn={e => this.handleChangeLogIn(e)}
      onClickFn={e => {
       this.handleLoggin(e);
      }}
      valueUser={this.state.userName}
      valuePassword={this.state.password}
      loadData={this.loadData}
     />
    </div>
   );
  } else {
   return (
    <div className={styles.wrapper}>
     <MainPannel
      userId={this.state.userId}
      users={this.state.users}
      contacts={this.state.contacts}
      logOut={e => {
       this.handleLogOut(e);
      }}
      loadData={this.loadData}
     />
    </div>
   );
  }
 }
}

export default App;

//fetch --> Json serwer --> firebase
//refactoring
//deploing-->netlify
