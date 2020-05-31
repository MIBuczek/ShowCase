import React from 'react';
import styles from './SingIn.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


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
 
 render() {

  const {auth}= this.props;
  if(auth.uid) return <Redirect to='/'/>
 
  return (
   <div className={styles.wrapper}>
    <button className={styles.crossBtn} onClick={this.props.singOut}>
     <img src={Cross} alt={'cross'} />
    </button>
    <h2>sing in.</h2>
    <h5>please fill up all files.</h5>
    <form>
     <Input type={'text'} placeholder={'user name.'}  name={'loggIn'} value={this.state.loggIn}
      onChange={e => this.handleSingInFiles(e)} /> */}
     <Input type={'password'}  placeholder={'password.'}  name={'password'}  value={this.state.password}
      onChange={e => this.handleSingInFiles(e)} />
     <Input type={'password'}  placeholder={'dublicate password.'} name={'dublicatePassword'}
      value={this.state.dublicatePassword} onChange={e => this.handleSingInFiles(e)}/>
     <Input type={'text'} placeholder={'company.'} name={'company'} value={this.state.company}
      onChange={e => this.handleSingInFiles(e)}/>
     <Input type={'text'} placeholder={'proffesion.'} name={'proffesion'} value={this.state.proffesion}
      onChange={e => this.handleSingInFiles(e)}/>
     <Input type={'text'} placeholder={'position.'} name={'position'} value={this.state.position} 
     onChange={e =>  this.handleSingInFiles(e)}/>
     <Checkbox type={'checkbox'} onChange={e => this.hangleCheckbox(e)} defaultChecked={this.state.chechbox}/>
     <Button type={'button'} value={'welcome.'} eventHandle={e => this.handleSingIn(e)} />
    </form>
   </div>
  );
}
}
const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(SingIn);
