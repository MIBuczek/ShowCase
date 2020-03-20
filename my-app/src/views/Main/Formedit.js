import React from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';

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
   userId: ''
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
   description: this.props.editContact.description,
   userId: this.props.editContact.userId
  });
 }
 handleEditContact = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
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
   const editContact = {
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

   fetch(`http://localhost:4000/contacts/${this.props.editContact.id}`, {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(editContact)
   })
    .then(response => response.text())
    .catch(error => console.error('Error:', error));
   alert('Your change has been saved');
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
      <h1>Edit contact basic information.</h1>
      <span>
       If you would like to update some information, please replace new value.
      </span>
     </div>
     <form className={styles.addContactForm}>
      <div className={styles.addContactFormPart}>
       <Input
        type={'text'}
        placeholder={'company name.'}
        name="companyName"
        value={this.state.companyName}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'www.'}
        name="companyWWW"
        value={this.state.companyWWW}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'conutry.'}
        size={'short'}
        name="companyCountry"
        value={this.state.companyCountry}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'proffesion.'}
        size={'short'}
        name="companyProffesion"
        value={this.state.companyProffesion}
        onChange={e => {
         this.handleEditContact(e);
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
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'e-mail.'}
        name="contactPhone"
        value={this.state.contactEmail}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'phone.'}
        size={'short'}
        name="contactPhone"
        value={this.state.contactPhone}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Input
        type={'text'}
        placeholder={'position.'}
        size={'short'}
        name="contactPosition"
        value={this.state.contactPosition}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
       <Textarea
        type={'text'}
        placeholder={'description.'}
        name="description"
        value={this.state.description}
        onChange={e => {
         this.handleEditContact(e);
        }}
       />
      </div>
     </form>
     <Button
      type={'button'}
      value={'save.'}
      eventHandle={e => {
       this.handleSaveChange(e);
      }}
     />
    </div>
   </section>
  );
 }
}

export default FromEdit;
