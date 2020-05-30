import React from 'react';
import styles from './App.module.scss';
import LoginPannel from './views/LogIn/LogInPannel';
import MainPannel from './views/Main/MainPannel';
import db from './Firebase';

class App extends React.Component {
 state = {
  users: [],
  contacts: [],
  userName: '',
  password: '',
  userId: undefined
 };

 loadData = () => {
  db
   .collection('users')
   .get()
   .then(snapshot => {
    const usersArr = [];
    snapshot.docs.map(doc => {
     let user = doc.data();
     user.userId = doc.id;
     return usersArr.push(user);
    });
    this.setState({ users: usersArr });
   });
  db
   .collection('contacts')
   .get()
   .then(snapshot => {
    const contactsArr = [];
    snapshot.docs.map(doc => {
     let contact = doc.data();
     contact.contacId = doc.id;
     return contactsArr.push(contact);
    });
    this.setState({ contacts: contactsArr });
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
   this.setState({ userName: '', password: '', userId: matchingUser.userId });
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

//firebase
//refactoring
//key sensitife
//sprawdzanie czy dany uzytkowni jest juz w bazie
//sprawdzanie czy dana wizytówka jest juz w bazie
//deploing-->netlify
