import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Cross from '../../assets/cross.png';
import styles from './Profile.module.scss';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { editUserProfile } from '../../store/actions/authAction';


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
   setTimeout(()=>{
     this.setState(this.props.user)
   },500)
 }

 handleChange = (e)=> {
  this.setState({
     [e.target.name]:e.target.value
  })
 };

 handleSaveChange = () => {
   this.props.editUserProfile(this.props.id,this.state)
   this.props.history.push('/');
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
        <Input type={'text'} placeholder={'name.'}  name={'name'} value={this.state.name}
          onChange={e => this.handleChange(e)} /> 
        <Input type={'text'} placeholder={'company.'} name={'company'} value={this.state.company}
          onChange={e => this.handleChange(e)}/>
        <Input type={'text'} placeholder={'proffesion.'} name={'proffesion'} value={this.state.proffesion}
          onChange={e => this.handleChange(e)}/>
        <Input type={'text'} placeholder={'position.'} name={'position'} value={this.state.position} 
        onChange={e =>  this.handleChange(e)}/>
     </form>
     <button className={styles.buttonSave}type={'button'}
      onClick={ ()=>this.handleSaveChange()}>
      <Link to="/">save change.</Link>
     </button>
    </div>
   </section>
  );
 }
}

const mapStateToProps = (state , ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null ;
  return{
    id : id,
    user : user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    editUserProfile : (id, user) => dispatch(editUserProfile(id, user))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
      {collection : 'users'}
  ])
)(Profile);