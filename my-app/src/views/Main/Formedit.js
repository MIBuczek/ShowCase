import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';

class FromEdit extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   companyName: this.props.user.companyName,
   companyCountry: this.props.user.companyCountry,
   companyAddress: this.props.user.companyAddress,
   companyWWW: this.props.user.companyWWW,
   contactName: this.props.user.contactName,
   contactEmail: this.props.user.contactEmail,
   contactPhone: this.props.user.contactPhone,
   contactProfesion: this.props.user.contactProfesion,
   description: this.props.user.description
  };
 }
 handleEditContact = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };
 handleSaveChange = e => {
  e.preventDefault();
  alert('Your change has been saved');
 };
 render() {
  return (
   <section className={styles.wrapper}>
    <div className={styles.addContact}>
     <div className={styles.addContactText}>
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
        placeholder={'profesion.'}
        size={'short'}
        name="contactProfesion"
        value={this.state.contactProfesion}
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
