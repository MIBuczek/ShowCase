import React from 'react';
import styles from './SingIn.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';
import db from '../../Firebase';

class SingIn extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loggIn: '',
   password: '',
   dublicatePassword: '',
   company: '',
   proffesion: '',
   position: '',
   checked: false
  };
 }
 handleSingInFiles = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 hangleCheckbox = e => {
  e.preventDefault();
  this.setState({ checked: e.target.checked });
 };
 handleSingIn = e => {
  e.preventDefault();
  const {
   loggIn,
   password,
   dublicatePassword,
   company,
   proffesion,
   position
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
  if (this.state.checked === false) {
   alert('Please accept requlations');
  }
  if (this.state.checked === true && errors.length === 0) {
   db
    .collection('users')
    .add({
     loggIn: loggIn,
     password: password,
     company: company,
     proffesion: proffesion,
     position: position
    })
    .then(() => this.props.loadData());
   alert('Congratulation, you sing in to ShowCase!');
   this.props.singOut(e);
  } else {
   alert('Please fill in all fields correctly.');
  }
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
      placeholder={'proffesion.'}
      name={'proffesion'}
      value={this.state.proffesion}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />{' '}
     <Input
      type={'text'}
      placeholder={'position.'}
      name={'position'}
      value={this.state.position}
      onChange={e => {
       this.handleSingInFiles(e);
      }}
     />
     <Checkbox
      type={'checkbox'}
      onChange={e => this.hangleCheckbox(e)}
      defaultChecked={this.state.chechbox}
     />
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
