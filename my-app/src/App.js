import React from 'react';
import styles from './App.module.scss';
import LoginPannel from './views/LogIn/LogInPannel';
import MainPannel from './views/Main/MainPannel';
import data from './data/data.json';

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
