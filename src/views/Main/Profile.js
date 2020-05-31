import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


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
  console.log('change was save')
 };

 render() {
   
  const {auth}= this.props;
  if(!auth.uid) return <Redirect to='/signin'/>
 
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
      <Input type={'text'} placeholder={'user name.'} name={'loggIn'}
       value={this.state.loggIn} onChange={e =>this.handleEditUser(e)}/>
      <Input type={'text'} placeholder={'password.'} name={'password'}
       value={this.state.password} onChange={e =>this.handleEditUser(e)}/>
      <Input type={'text'}placeholder={'dublicate password.'} name={'dublicatePassword'}
       value={this.state.dublicatePassword} onChange={e => this.handleEditUser(e)}/>
      <Input type={'text'} placeholder={'company.'} name={'company'} value={this.state.company}
       onChange={e =>this.handleEditUser(e)}/>
      <Input type={'text'} placeholder={'proffesion.'} name={'proffesion'} value={this.state.proffesion}
       onChange={e => this.handleEditUser(e)}/>
      <Input type={'text'} placeholder={'position.'} name={'position'}value={this.state.position}
       onChange={e =>this.handleEditUser(e)}/>
     </form>
     <button className={styles.buttonSave}type={'button'}
      onClick={e =>this.handleSaveChange(e)}>
      <Link to="/">save change.</Link>
     </button>
    </div>
   </section>
  );
 }
}

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Profile);
