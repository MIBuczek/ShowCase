import React from 'react';
import styles from './LogInForm.module.scss';
import SingIn from './SingIn';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { DataContext } from '../../context/DataContext';

class LoggIn extends React.Component {
 static contextType = DataContext;

 render() {
  const {
   userName,
   userPassword,
   singIn,
   handleSingIn,
   handleChangeInput,
   handleLoggin
  } = this.context;

  const singInText = (
   <h3 className={styles.singInText}>
    if you do not have account, please
    <button className={styles.singInBtn} onClick={e => handleSingIn(e)}>
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
       value={userName}
       onChange={handleChangeInput}
      />
      <Input
       type={'password'}
       placeholder={'password.'}
       name="userPassword"
       value={userPassword}
       onChange={handleChangeInput}
      />
     </form>
     <Button type={'button'} value={'next.'} eventHandle={handleLoggin} />
     {singIn ? <SingIn /> : singInText}
    </div>
   </section>
  );
 }
}

export default LoggIn;
