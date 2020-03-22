import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';
import db from '../../Firebase';

class Profile extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loggIn: '',
   password: '',
   dublicatePassword: '',
   company: '',
   position: '',
   proffesion: '',
   userId: ''
  };
 }
 componentDidMount() {
  const currnetUser = this.props.usersData.find(user => {
   if (user.userId === this.props.userId) {
    return user;
   }
   return null;
  });
  this.setState({
   loggIn: currnetUser.loggIn,
   password: currnetUser.password,
   dublicatePassword: currnetUser.password,
   company: currnetUser.company,
   position: currnetUser.position,
   proffesion: currnetUser.proffesion,
   userId: this.props.userId
  });
 }
 handleEditUser = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
  e.preventDefault();
  const {
   loggIn,
   password,
   dublicatePassword,
   company,
   position,
   proffesion,
   userId
  } = this.state;
  const errors = [];
  if (
   loggIn.length < 2 &&
   company.length < 2 &&
   proffesion.length < 2 &&
   position.length < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (password !== dublicatePassword) {
   errors.push('password and double password must be identify,');
   alert('password and double password must be identify,');
  }
  if (errors.length === 0) {
   const upDatePerson = {
    loggIn,
    password,
    company,
    proffesion,
    position,
    userId
   };
   db
    .collection('users')
    .doc(this.props.userId)
    .update(upDatePerson)
    .then(() => this.props.loadData());
   alert('Your change has been saved');
  } else {
   alert('Please fill in all fields correctly.');
  }
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
       name={'loggIn'}
       value={this.state.loggIn}
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
       placeholder={'proffesion.'}
       name={'proffesion'}
       value={this.state.proffesion}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
      <Input
       type={'text'}
       placeholder={'position.'}
       name={'position'}
       value={this.state.position}
       onChange={e => {
        this.handleEditUser(e);
       }}
      />
     </form>
     <button
      className={styles.buttonSave}
      type={'button'}
      onClick={e => {
       this.handleSaveChange(e);
      }}
     >
      <Link to="/">save change.</Link>
     </button>
    </div>
   </section>
  );
 }
}
export default Profile;
