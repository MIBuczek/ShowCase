import React from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class FromEdit extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    companyName: '',
    companyCountry: '',
    companyWWW: '',
    companyProffesion: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactPosition: '',
    description: '',
    userId: '',
    contacId: ''
  };
 }
  componentDidMount() {
  this.setState({
    companyName: this.props.editContact.companyName,
    companyCountry: this.props.editContact.companyCountry,
    companyWWW: this.props.editContact.companyWWW,
    companyProffesion: this.props.editContact.companyProffesion,
    contactName: this.props.editContact.contactName,
    contactEmail: this.props.editContact.contactEmail,
    contactPhone: this.props.editContact.contactPhone,
    contactPosition: this.props.editContact.contactPosition,
    contacId: this.props.editContact.contacId,
    description: this.props.editContact.description,
    userId: this.props.userId
  });
 }
 handleEditContact = e => {
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
  console.log('chagnes was save');
 };
 render() {
   
  const {auth}= this.props;
  if(!auth.uid) return <Redirect to='/signin'/>
 
  return (
   <section className={styles.wrapper}>
    <div className={styles.addContact}>
     <div className={styles.addContactText}>
      <Link to="/">
       <button className={styles.crossBtn}>
        <img src={Cross} alt={'cross'} />
       </button>
      </Link>
      <h1>Edit contact basic information.</h1>
      <span>
       If you would like to update some information, please replace new value.
      </span>
     </div>
     <form className={styles.addContactForm}>
      <div className={styles.addContactFormPart}>
       <Input type={'text'} placeholder={'company name.'} name="companyName"
        value={this.state.companyName} onChange={e => this.handleEditContact(e)} />
       <Input type={'text'}  placeholder={'www.'}  name="companyWWW" 
        value={this.state.companyWWW} onChange={e =>  this.handleEditContact(e) } />
       <Input type={'text'} placeholder={'conutry.'} size={'short'} name="companyCountry" 
        value={this.state.companyCountry} onChange={e => this.handleEditContact(e)} />
       <Input type={'text'} placeholder={'proffesion.'} size={'short'} name="companyProffesion"
        value={this.state.companyProffesion} onChange={e => this.handleEditContact(e)}/>
      </div>
      <div>
       <Input  type={'text'}  placeholder={'contact person.'}  name="contactName"
        value={this.state.contactName}  onChange={e => this.handleEditContact(e)} />
       <Input  type={'text'} placeholder={'e-mail.'}  name="contactEmail" 
        value={this.state.contactEmail}  onChange={e => this.handleEditContact(e)} />
       <Input  type={'text'}  placeholder={'phone.'}  size={'short'} name="contactPhone"
        value={this.state.contactPhone}  onChange={e =>  this.handleEditContact(e)}/>
       <Input  type={'text'}  placeholder={'position.'} size={'short'} name="contactPosition"
        value={this.state.contactPosition}  onChange={e => this.handleEditContact(e) } />
       <Textarea  type={'text'} placeholder={'description.'} name="description" 
       value={this.state.description} onChange={e => this.handleEditContact(e)} />
      </div>
     </form>
     <button  className={styles.buttonAdd}  type={'button'} onClick={e => this.handleSaveChange(e)}>
      <Link to="/">save.</Link>
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

export default connect(mapStateToProps)(FromEdit);
