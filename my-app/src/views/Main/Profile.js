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
   loggIn: this.props.user.loggIn,
   password: this.props.user.password,
   dublicatePassword: this.props.user.password,
   company: this.props.user.company,
   position: this.props.user.position,
   proffesion: this.props.user.proffesion,
   email: this.props.user.email
  };
 }
 handleEditUser = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
  e.preventDefault();
  const { loggIn, password, company, position, proffesion, email } = this.state;
  const upDatePerson = {
   loggIn,
   password,
   company,
   proffesion,
   position,
   email
  };
  fetch(`http://localhost:4000/users/${this.props.user.id}`, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(upDatePerson)
  })
   .then(response => response.text())
   .catch(error => console.error('Error:', error));
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
     ></Button>
    </div>
   </section>
  );
 }
}
export default Profile;
