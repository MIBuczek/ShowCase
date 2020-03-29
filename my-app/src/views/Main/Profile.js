import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';
import { DataContext } from '../../context/DataContext';

class Profile extends React.Component {
 static contextType = DataContext;
 render() {
  const {
   loggIn,
   password,
   dublicatePassword,
   company,
   position,
   proffesion,
   handleChangeInput,
   handleSaveChangeUser
  } = this.context;
  return (
   <section className={styles.wrapper}>
    <div className={styles.editPannel}>
     <Link to="/">
      <button className={styles.crossBtn}>
       <img src={Cross} alt={'cross'} />
      </button>
     </Link>
     <h2>edit profile.</h2>
     <h5>if you would like to update your profile.</h5>
     <form>
      <Input
       type={'text'}
       placeholder={'user name.'}
       name={'loggIn'}
       value={loggIn}
       onChange={e => handleChangeInput(e)}
      />
      <Input
       type={'text'}
       placeholder={'password.'}
       name={'password'}
       value={password}
       onChange={e => handleChangeInput(e)}
      />
      <Input
       type={'text'}
       placeholder={'dublicate password.'}
       name={'dublicatePassword'}
       value={dublicatePassword}
       onChange={e => handleChangeInput(e)}
      />
      <Input
       type={'text'}
       placeholder={'company.'}
       name={'company'}
       value={company}
       onChange={e => handleChangeInput(e)}
      />
      <Input
       type={'text'}
       placeholder={'proffesion.'}
       name={'proffesion'}
       value={proffesion}
       onChange={e => handleChangeInput(e)}
      />
      <Input
       type={'text'}
       placeholder={'position.'}
       name={'position'}
       value={position}
       onChange={e => handleChangeInput(e)}
      />
     </form>
     <button className={styles.buttonSave} type={'button'} onClick={e => handleSaveChangeUser(e)}>
      <Link to="/">save change.</Link>
     </button>
    </div>
   </section>
  );
 }
}
export default Profile;
