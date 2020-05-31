import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './views/Main/Navbar';
import LoginPannel from './views/LogIn/LogInPannel';
import MainPannel from './views/Main/MainPannel';
import SignIn from './views/LogIn/SingIn';
import Formadd from './views/Main/Formadd';
import Formedit from './views/Main/Formedit';
import Profile from './views/Main/Profile';
import Footer from './views/LogIn/Footer';

class App extends React.Component {

 render() {
  return(
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Navbar />
        <Switch>
          <Route exact path='/'component={MainPannel} />
          <Route path='/contact/:id' component={Formedit} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={LoginPannel} />
          <Route path='/addcontact' component={Formadd} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
    </div>
    </BrowserRouter>
   );
  }
}

export default App;
