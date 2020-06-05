import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';


const Cards = (props) => {

   if(props.contacts.length !== 0){
      return (
      <section className={styles.wrapper}>
         {props.contacts &&  props.contacts.map( contact => (
            <div className={styles.card} key={contact.companyName}>
            <div className={styles.cardData}>
               <div className={styles.cardData_text}>
                  <p>Company :</p>
                  <h1>{contact.companyName}</h1>
               </div>
               <div className={styles.cardData_text}>
                  <p>Conuntry :</p>
                  <span>{contact.companyCountry}</span>
               </div>
               <div className={styles.cardData_text}> 
                  <p>Person :</p>
                  <h2>{contact.contactName}</h2>
               </div>
               <button>
               <Link to={"/contact/" + contact.contactId}>show more.</Link>
               </button>
            </div>
            </div>
         ))}
      </section>
      );
   } else {
      return(
         <section className={styles.wrapper}>
             <h1 className={styles.loading}>your contacts base is empty<br/>please add first contact.</h1>
         </section>
      )
   }
};

export default Cards;
