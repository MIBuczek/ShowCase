import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({
 userData,
 handleEditContact,
 visible,
 handleDeleteContact
}) => {
 return (
  <section className={styles.wrapper}>
   {userData.slice(0, visible).map((contact, id) => {
    return (
     <div className={styles.card} key={id}>
      <div className={styles.cardBtn}>
       <button
        onClick={e => {
         handleEditContact(e, contact);
        }}
       >
        <Link to="/editcontact">edit.</Link>
       </button>
       <button
        type="button"
        onClick={e => handleDeleteContact(e, contact.contacId)}
       >
        delete.
       </button>
      </div>
      <div className={styles.cardData}>
       <h1>{contact.companyName}</h1>
       <span>{contact.companyCountry}</span>
       <h2>{contact.contactName}</h2>
       <span>phone: {contact.contactPhone}</span>
       <span>email: {contact.contactEmail}</span>
       <p>Note: {contact.description}</p>
      </div>
     </div>
    );
   })}
  </section>
 );
};

export default Cards;
