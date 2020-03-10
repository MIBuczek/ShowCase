import React from 'react';
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
   contactName: '',
   contactEmail: '',
   contactPhone: '',
   contactProfesion: '',
   description: ''
  };
 }
 render() {
  return (
   <section className={styles.wrapper}>
    <div className={styles.addContact}>
     <div className={styles.addContactText}>
      <h1>You are adding new contact to your client base.</h1>
      <span>please complete all required fields.</span>
     </div>
     <form className={styles.addContactForm}>
      <div className={styles.addContactFormPart}>
       <Input type={'text'} placeholder={'company name.'} />
       <Input type={'text'} placeholder={'zip code.'} size={'short'} />
       <Input type={'text'} placeholder={'city.'} size={'short'} />
       <Input type={'text'} placeholder={'street.'} />
      </div>
      <div>
       <Input type={'text'} placeholder={'contact person.'} />
       <Input type={'text'} placeholder={'phone.'} size={'short'} />
       <Input type={'text'} placeholder={'e-mail.'} size={'short'} />
       <Textarea type={'text'} placeholder={'description.'} />
      </div>
     </form>
     <Button type={'button'} value={'add.'} />
    </div>
   </section>
  );
 }
}

export default FromEdit;
