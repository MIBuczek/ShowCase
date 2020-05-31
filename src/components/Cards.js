import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = () => {

 const handleEditContact = (e)=>{
    console.log('turn to edit contact')
 }
 const handleDeleteContact = (e)=>{
    console.log('delete contact')
 }
 return (
  <section className={styles.wrapper}>
     <div className={styles.card}>
      <div className={styles.cardBtn}>
       <button onClick={e => handleEditContact(e)} >
        <Link to="/editcontact">edit.</Link>
       </button>
       <button type="button" onClick={e => handleDeleteContact(e)}>
        delete.
       </button>
      </div>
      <div className={styles.cardData}>
       <h1>contact.companyName</h1>
       <span>contact.companyCountry</span>
       <h2>contact.contactName</h2>
       <span>phone: contact.contactPhone</span>
       <span>email: contact.contactEmail</span>
       <p>Note: contact.description</p>
      </div>
     </div>
  </section>
 );
};

export default Cards;
