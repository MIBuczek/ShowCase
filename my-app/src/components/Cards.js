import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({ userData }) => {
 return (
  <section className={styles.wrapper}>
   {userData.contacts.map(contact => {
    return (
     <div className={styles.card} key={contact.companyName}>
      <div className={styles.cardBtn}>
       <button>edit.</button>
       <button>delete.</button>
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
