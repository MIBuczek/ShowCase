import React from 'react';
import styles from './SingIn.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';

class SingIn extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loggIn: '',
   password: '',
   dublicatePassword: '',
   company: '',
   proffesion: '',
   newUser: undefined
  };
 }
 handleSingInFiles = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSingIn = e => {
  e.preventDefault();
  const { loggIn, password, company, proffesion } = this.state;
  const newPerson = {
   loggIn,
   password,
   company,
   proffesion,
   contacts: []
  };
  this.setState({ newUser: newPerson });
  fetch('http://localhost:4000/users', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(newPerson)
  })
   .then(response => response.text())
   .catch(error => console.error('Error:', error));
 };
 render() {
  return (
   <div className={styles.wrapper}>
    <button className={styles.crossBtn} onClick={this.props.singOut}>
     <img src={Cross} alt={'cross'} />
    </button>
    <h2>sing in.</h2>
    <h5>please fill up all files.</h5>
    <form>
     <Input
      type={'text'}
      placeholder={'user name.'}
      name={'loggIn'}
      value={this.state.loggIn}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Input
      type={'password'}
      placeholder={'password.'}
      name={'password'}
      value={this.state.password}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Input
      type={'password'}
      placeholder={'dublicate password.'}
      name={'dublicatePassword'}
      value={this.state.dublicatePassword}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Input
      type={'text'}
      placeholder={'company.'}
      name={'company'}
      value={this.state.company}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Input
      type={'text'}
      placeholder={'profesion.'}
      name={'proffesion'}
      value={this.state.proffesion}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Checkbox type={'checkbox'} />
    </form>
    <Button
     type={'button'}
     value={'welcome.'}
     eventHandle={e => this.handleSingIn(e)}
    />
   </div>
  );
 }
}

export default SingIn;
