import React from 'react';
import styles from '../components/Searchbar.module.scss';

const Searchbar = ({ searchValue, eventHandle, eventShow, searchType }) => {
 return (
  <section className={styles.serchbar}>
   <form className={styles.serchbarForm}>
    <select
     className={styles.serchbarSelect}
     id="filter"
     name="filter"
     onChange={searchType}
    >
     <option value="companyCountry">country.</option>
     <option value="companyName">company name.</option>
    </select>
    <input
     className={styles.serchbarInput}
     type="text"
     name="search"
     placeholder="search"
     value={searchValue}
     onChange={eventHandle}
    ></input>
    <button className={styles.serchbarBtn} onClick={eventShow} type="button">
     search.
    </button>
   </form>
  </section>
 );
};
export default Searchbar;
