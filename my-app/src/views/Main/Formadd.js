import React from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';
import { DataContext } from '../../context/DataContext';

class FromAdd extends React.Component {
 static contextType = DataContext;
 render() {
  const {
   companyNameNew,
   companyCountryNew,
   companyWWWNew,
   companyProffesionNew,
   contactNameNew,
   contactEmailNew,
   contactPhoneNew,
   contactPositionNew,
   descriptionNew,
   handleChangeInput,
   handleUploadContact
  } = this.context;
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
        value={companyNameNew}
        name="companyNameNew"
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'www.'}
        size={'short'}
        name="companyWWWNew"
        value={companyWWWNew}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'country.'}
        size={'short'}
        name="companyCountryNew"
        value={companyCountryNew}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'proffesion.'}
        name="companyProffesionNew"
        value={companyProffesionNew}
        onChange={e => handleChangeInput(e)}
       />
      </div>
      <div>
       <Input
        type={'text'}
        placeholder={'contact person.'}
        name="contactNameNew"
        value={contactNameNew}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'position.'}
        value={contactPositionNew}
        name="contactPositionNew"
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'phone.'}
        size={'short'}
        value={contactPhoneNew}
        name="contactPhoneNew"
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'e-mail.'}
        size={'short'}
        name="contactEmailNew"
        value={contactEmailNew}
        onChange={e => handleChangeInput(e)}
       />
       <Textarea
        type={'text'}
        placeholder={'description.'}
        value={descriptionNew}
        name="descriptionNew"
        onChange={e => handleChangeInput(e)}
       />
      </div>
     </form>
     <button className={styles.buttonAdd} type={'button'} onClick={e => handleUploadContact(e)}>
      <Link to="/">add.</Link>
     </button>
    </div>
   </section>
  );
 }
}

export default FromAdd;
