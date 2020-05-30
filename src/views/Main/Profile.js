import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';

class Profile extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   userName: this.props.user.loggIn,
   password: this.props.user.password,
   dublicatePassword: this.props.user.password,
   company: this.props.user.company,
   profesion: this.props.user.position,
   email: this.props.user.email
  };
 }
 handleEditUser = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
  e.preventDefault();
  alert('Your change has been saved');
 };
 render() {
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
       name={'userName'}
       value={this.state.userName}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'password.'}
       name={'password'}
       value={this.state.password}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'dublicate password.'}
       name={'dublicatePassword'}
       value={this.state.dublicatePassword}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'company.'}
       name={'company'}
       value={this.state.company}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'profesion.'}
       name={'profesion'}
       value={this.state.profesion}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'email.'}
       name={'email'}
       value={this.state.email}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
     </form>
     <Button
      type={'button'}
      value={'save change.'}
      eventHandle={e => {
       this.handleSaveChange(e);
      }}
     />
    </div>
   </section>
  );
 }
}
export default Profile;
