import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './views/Main/Navbar';
import LogInForm from './views/LogIn/LogInForm';
import MainPannel from './views/Main/MainPannel';
import SignUpForm from './views/LogIn/SignUpForm';
import Formadd from './views/Main/Formadd';
import Formedit from './views/Main/Formedit';
import Contact from './components/Contact';
import Profile from './views/Main/Profile';
import Footer from './views/LogIn/Footer';
import IntroPannel from './views/LogIn/IntroPannel';

class App extends React.Component {

 render() {
  return(
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Navbar />
        <Switch>
          <Route exact path='/'component={MainPannel} />
          <Route exact path='/intro'component={IntroPannel} />
          <Route path='/editcontact/:id' component={Formedit} />
          <Route path='/contact/:id' component={Contact} />
          <Route path='/signup' component={SignUpForm} />
          <Route path='/login' component={LogInForm} />
          <Route path='/addcontact' component={Formadd} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
        <Footer />
    </div>
    </BrowserRouter>
   );
  }
}

export default App;
