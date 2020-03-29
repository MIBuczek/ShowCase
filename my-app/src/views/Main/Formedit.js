import React from 'react';
import { Link } from 'react-router-dom';
import Cross from '../../assets/cross.png';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import styles from './Formadd.module.scss';
import { DataContext } from '../../context/DataContext';

class FromEdit extends React.Component {
 static contextType = DataContext;
 render() {
  const {
   companyNameEdit,
   companyCountryEdit,
   companyWWWEdit,
   companyProffesionEdit,
   contactNameEdit,
   contactEmailEdit,
   contactPhoneEdit,
   contactPositionEdit,
   descriptionEdit,
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
      <h1>Edit contact basic information.</h1>
      <span>If you would like to update some information, please replace new value.</span>
     </div>
     <form className={styles.addContactForm}>
      <div className={styles.addContactFormPart}>
       <Input
        type={'text'}
        placeholder={'company name.'}
        name="companyNameEdit"
        value={companyNameEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'www.'}
        name="companyWWWEdit"
        value={companyWWWEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'conutry.'}
        size={'short'}
        name="companyCountryEdit"
        value={companyCountryEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'proffesion.'}
        size={'short'}
        name="companyProffesionEdit"
        value={companyProffesionEdit}
        onChange={e => handleChangeInput(e)}
       />
      </div>
      <div>
       <Input
        type={'text'}
        placeholder={'contact person.'}
        name="contactNameEdit"
        value={contactNameEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'e-mail.'}
        name="contactEmailEdit"
        value={contactEmailEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'phone.'}
        size={'short'}
        name="contactPhoneEdit"
        value={contactPhoneEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Input
        type={'text'}
        placeholder={'position.'}
        size={'short'}
        name="contactPositionEdit"
        value={contactPositionEdit}
        onChange={e => handleChangeInput(e)}
       />
       <Textarea
        type={'text'}
        placeholder={'description.'}
        name="descriptionEdit"
        value={descriptionEdit}
        onChange={e => handleChangeInput(e)}
       />
      </div>
     </form>
     <button className={styles.buttonAdd} type={'button'} onClick={e => handleUploadContact(e)}>
      <Link to="/">save.</Link>
     </button>
    </div>
   </section>
  );
 }
}

export default FromEdit;
