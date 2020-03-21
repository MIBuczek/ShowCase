import React from 'react';
import LoginForm from './LogInForm';
import Header from './Header';
import Motto from './Motto';
import Footer from './Footer';

const LoginPannel = ({
 onChangeFn,
 onClickFn,
 valueUser,
 valuePassword,
 loadData
}) => (
 <>
  <Header />
  <Motto />
  <LoginForm
   onChangeFn={onChangeFn}
   onClickFn={onClickFn}
   valueUser={valueUser}
   valuePassword={valuePassword}
  />
  <Footer />
 </>
);

export default LoginPannel;
