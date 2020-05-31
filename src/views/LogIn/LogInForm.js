import React, { Component } from 'react';
import styles from './LogInForm.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';


class LoggIn extends Component{
 state = {
   email: '',
   password: ''
 }

 handleChange = (e)=> {
    this.setState({
       [e.target.name]:e.target.value
    })
 }
 handleSubmit = (e)=> {
   e.preventDefault();
   this.props.signIn(this.state);
 }

 render() {
   const { auth , authError } = this.props.authError
   if(auth.uid) return <Redirect to='/'/>

  return (
   <section className={styles.wrapper}>
    <div className={styles.loggIn}>
     <h3 className={styles.title}>log in.</h3>
     <form>
      <Input type={'text'}  placeholder={'user email.'}  name="email" 
      value={this.state.email} onChange={(e)=>this.handleChange(e)} />
      <Input type={'password'} placeholder={'password.'} name="password"
       value={this.state.valuePassword} onChange={(e)=>this.handleChange(e)}/>
     </form>
     <Button type={'button'} value={'log in.'} eventHandle={(e)=>this.handleSubmit(e)}/>
      <div>
        {authError ? <span>authError</span> : null}
      </div>
    </div>
   </section>
  );
 }
}

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth,
    authError : state.auth.authError 
  }
}
const mapDispatchToProps = (dispatch) => {
   return{
    signIn: (creds) => dispatch(signIn(creds))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggIn);

