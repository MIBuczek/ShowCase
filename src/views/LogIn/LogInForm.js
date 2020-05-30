import React from 'react';
import styles from './LogInForm.module.scss';
import SingIn from './SingIn';
import Input from '../../components/Input';
import Button from '../../components/Button';

class LoggIn extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   singIn: false,
   newUser: undefined
  };
 }

 handleSingIn = e => {
  e.preventDefault();
  this.setState({ singIn: true });
 };
 handleSingOut = e => {
  e.preventDefault();
  this.setState({ singIn: false });
 };
 addNewUser = (e, newPerson) => {
  e.preventDefault();
  this.setState({ newUser: newPerson });
 };
 render() {
  const singInText = (
   <h3 className={styles.singInText}>
    if you do not have account, please
    <button
     className={styles.singInBtn}
     onClick={e => {
      this.handleSingIn(e);
     }}
    >
     sing in.
    </button>
   </h3>
  );
  return (
   <section className={styles.wrapper}>
    <div className={styles.loggIn}>
     <h3 className={styles.title}>log in.</h3>
     <form>
      <Input
       type={'text'}
       placeholder={'user name.'}
       name="userName"
       value={this.props.valueUser}
       onChange={this.props.onChangeFn}
      />
      <Input
       type={'password'}
       placeholder={'password.'}
       name="password"
       value={this.props.valuePassword}
       onChange={this.props.onChangeFn}
      />
     </form>
     <Button
      type={'button'}
      value={'next.'}
      eventHandle={this.props.onClickFn}
     />
     {this.state.singIn ? (
      <SingIn
       loadData={this.props.loadData}
       singOut={e => {
        this.handleSingOut(e);
       }}
       eventHandle={this.handleSingOut}
      />
     ) : (
      singInText
     )}
    </div>
   </section>
  );
 }
}

export default LoggIn;
