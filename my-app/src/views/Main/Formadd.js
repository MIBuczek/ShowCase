import React from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';

class FromAdd extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   userId: this.props.user.id,
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
 }
 handleAddContact = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleUploadContact = e => {
  e.preventDefault();
  const {
   companyName,
   companyCountry,
   companyWWW,
   companyProffesion,
   contactName,
   contactEmail,
   contactPhone,
   contactPosition,
   description,
   userId
  } = this.state;
  const errors = [];
  if (
   companyName < 2 &&
   companyCountry < 2 &&
   companyWWW < 2 &&
   companyProffesion < 2 &&
   contactName < 2 &&
   contactEmail < 2 &&
   contactPhone < 2 &&
   contactPosition < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (errors.length === 0) {
   const newContact = {
    companyName,
    companyCountry,
    companyWWW,
    companyProffesion,
    contactName,
    contactEmail,
    contactPhone,
    contactPosition,
    description,
    userId
   };
   fetch(`http://localhost:4000/contacts`, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(newContact)
   })
    .then(response => response.text())
    .catch(error => console.error('Error:', error));
  } else {
   alert('Please fill in all fields correctly.');
  }
 };
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
       <Input
        type={'text'}
        placeholder={'company name.'}
        value={this.state.companyName}
        name="companyName"
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'www.'}
        size={'short'}
        name="companyWWW"
        value={this.state.companyWWW}
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'country.'}
        size={'short'}
        name="companyCountry"
        value={this.state.companyCountry}
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'proffesion.'}
        name="companyProffesion"
        value={this.state.companyProffesion}
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
      </div>
      <div>
       <Input
        type={'text'}
        placeholder={'contact person.'}
        name="contactName"
        value={this.state.contactName}
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'phone.'}
        size={'short'}
        value={this.state.contactPhone}
        name="contactPhone"
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'e-mail.'}
        size={'short'}
        name="contactEmail"
        value={this.state.contactEmail}
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
       <Textarea
        type={'text'}
        placeholder={'description.'}
        value={this.state.description}
        name="description"
        onChange={e => {
         this.handleAddContact(e);
        }}
       />
      </div>
     </form>
     <Button
      type={'button'}
      value={'add.'}
      eventHandle={e => this.handleUploadContact(e)}
     />
    </div>
   </section>
  );
 }
}

export default FromAdd;
