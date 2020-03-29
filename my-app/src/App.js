import React from 'react';
import LoginPannel from './views/LogIn/LogInPannel';
import MainPannel from './views/Main/MainPannel';
import DataContextProvider from './context/DataContext';
import styles from './App.module.scss';

class App extends React.Component {
 state = {
  isLogIn: false
 };
 render() {
  const logIn = this.state.isLogIn ? <MainPannel /> : <LoginPannel />;
  return (
   <DataContextProvider>
    <div className={styles.wrapper}>{logIn}</div>
   </DataContextProvider>
  );
 }
}

export default App;

//firebase
//refactoring
//key sensitife
//sprawdzanie czy dany uzytkowni jest juz w bazie
//sprawdzanie czy dana wizytówka jest juz w bazie
//deploing-->netlify
