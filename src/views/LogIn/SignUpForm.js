import React from 'react';
import styles from './SignUpForm.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';


class SignUpForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   email: '',
   name: '',
   password: '',
   dublicatePassword: '',
   company: '',
   proffesion: '',
   position: '',
   checked: false
  };
}

handleChange = (e)=> {
  this.setState({
     [e.target.name]:e.target.value
  })
};

hangleCheckbox = e => {
  e.preventDefault();
  this.setState({ checked: e.target.checked });
 };
 
 handleSingIn = (e) => {
  e.preventDefault();
  this.props.signUp(this.state)
};

 render() {

  const {auth}= this.props;
  if(auth.uid) return <Redirect to='/'/>
 
  return (
   <section className={styles.wrapper}>
     <div  className={styles.singup}>
      <button className={styles.crossBtn} onClick={this.props.singOut}>
      <img src={Cross} alt={'cross'} />
      </button>
      <h2>sign up.</h2>
      <h5>please fill up all files.</h5>
      <form>
      <Input type={'text'} placeholder={'name.'}  name={'name'} value={this.state.name}
        onChange={e => this.handleChange(e)} /> 
      <Input type={'text'} placeholder={'email.'}  name={'email'} value={this.state.email}
        onChange={e => this.handleChange(e)} />
      <Input type={'password'}  placeholder={'password.'}  name={'password'}  value={this.state.password}
        onChange={e => this.handleChange(e)} />
      <Input type={'password'}  placeholder={'dublicate password.'} name={'dublicatePassword'}
        value={this.state.dublicatePassword} onChange={e => this.handleChange(e)}/>
      <Input type={'text'} placeholder={'company.'} name={'company'} value={this.state.company}
        onChange={e => this.handleChange(e)}/>
      <Input type={'text'} placeholder={'proffesion.'} name={'proffesion'} value={this.state.proffesion}
        onChange={e => this.handleChange(e)}/>
      <Input type={'text'} placeholder={'position.'} name={'position'} value={this.state.position} 
      onChange={e =>  this.handleChange(e)}/>
      <Checkbox type={'checkbox'} onChange={e => this.hangleCheckbox(e)} defaultChecked={this.state.chechbox}/>
      <Button type={'button'} value={'welcome.'} eventHandle={e => this.handleSingIn(e)} />
      </form>
     </div>
   </section>
  );
}
}
const mapStateToProps = (state)=> {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
