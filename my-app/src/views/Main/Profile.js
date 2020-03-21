import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';

class Profile extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loggIn: '',
   password: '',
   dublicatePassword: '',
   company: '',
   position: '',
   proffesion: ''
  };
 }
 componentDidMount() {
  this.setState({
   loggIn: this.props.users[this.props.userId].loggIn,
   password: this.props.users[this.props.userId].password,
   dublicatePassword: this.props.users[this.props.userId].password,
   company: this.props.users[this.props.userId].company,
   position: this.props.users[this.props.userId].position,
   proffesion: this.props.users[this.props.userId].proffesion
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
   proffesion
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
    position
   };
   fetch(`http://localhost:4000/users/${this.props.userId + 1}`, {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(upDatePerson)
   })
    .then(response => response.text())
    .then(() => this.props.loadData())
    .catch(error => console.error('Error:', error));
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
