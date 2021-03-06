import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';
import { connect } from 'react-redux';
import { createContact } from '../../store/actions/contactActions';


class FromAdd extends Component {
 state = {
   companyName: '',
   companyCountry: '',
   companyWWW: '',
   companyProffesion: '',
   contactName: '',
   contactEmail: '',
   contactPhone: '',
   contactPosition: '',
   description: ''
  };

 handleAddContact = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };

 handleUploadContact = e => {
  this.props.createContact(this.state);
  this.props.history.push('/');
 }
 render() {
  return (
   <section className={styles.wrapper}>
    <div className={styles.addContact}>
     <div className={styles.addContactText}>
      <Link to="/">
       <button className={styles.crossBtn}>
        <img src={Cross} alt={'cross'} />
       </button>
      </Link>
      <h1>You are adding new contact to your client base.</h1>
      <span>please complete all required fields.</span>
     </div>
     <form className={styles.addContactForm}>
      <div className={styles.addContactFormPart}>
       <Input  type={'text'}  placeholder={'company name.'} value={this.state.companyName}
        name="companyName"  onChange={e =>this.handleAddContact(e)} />
       <Input type={'text'}  placeholder={'www.'} size={'short'} name="companyWWW"
        value={this.state.companyWWW} onChange={e => this.handleAddContact(e)} />
       <Input type={'text'} placeholder={'country.'} size={'short'}  name="companyCountry"
        value={this.state.companyCountry} onChange={e => this.handleAddContact(e)}/>
       <Input type={'text'} placeholder={'proffesion.'} name="companyProffesion"
        value={this.state.companyProffesion} onChange={e => this.handleAddContact(e)}/>
      </div>
      <div>
       <Input  type={'text'}  placeholder={'contact person.'}  name="contactName"
        value={this.state.contactName} onChange={e => this.handleAddContact(e)} />
       <Input type={'text'}  placeholder={'phone.'} size={'short'} value={this.state.contactPhone}
        name="contactPhone"  onChange={e => this.handleAddContact(e)}/>
       <Input type={'text'}  placeholder={'e-mail.'}  size={'short'}  name="contactEmail"
        value={this.state.contactEmail}  onChange={e => this.handleAddContact(e)} />
       <Textarea  type={'text'}  placeholder={'description.'} value={this.state.description}
        name="description"  onChange={e => this.handleAddContact(e)}/>
      </div>
     </form>
     <button className={styles.buttonAdd}  type={'button'} onClick={e => this.handleUploadContact(e)} >
      <Link to="/">add.</Link>
     </button>
    </div>
   </section>
  );
 }
}

const mapStateToProps = state =>{
  const id = state.firebase.auth.uid;
  return{
    id : id
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    createContact : contact => dispatch(createContact(contact))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FromAdd);
