import React from 'react';
import styles from '../components/Searchbar.module.scss';

const Searchbar = () => {
 return (
  <section className={styles.serchbar}>
   <form className={styles.serchbarForm}>
    <select className={styles.serchbarSelect} id="filter" name="filter">
     <option value="country">country.</option>
     <option value="companyName">company name.</option>
     <option value="profesion">profesion.</option>
    </select>
    <input
     className={styles.serchbarInput}
     type="text"
     name="search"
     placeholder="search"
    ></input>
    <button className={styles.serchbarBtn} type="button">
     search.
    </button>
   </form>
  </section>
 );
};
export default Searchbar;
