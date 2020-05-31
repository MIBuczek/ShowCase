import React from 'react';
import styles from '../Main/Mainbar.module.scss';
import Searchbar from '../../components/Searchbar';
import Cards from '../../components/Cards';
import Button from '../../components/Button';

class Mainbar extends React.Component {

 render() {
  return (
   <section className={styles.wrappeCards}>
    <Searchbar />
    <Cards/>
    <Button />
   </section>
  );
 }
}

export default Mainbar;
