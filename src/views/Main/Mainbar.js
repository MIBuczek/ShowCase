import React from 'react';
import styles from '../Main/Mainbar.module.scss';
import Searchbar from '../../components/Searchbar';
import Cards from '../../components/Cards';

class Mainbar extends React.Component {
 constructor({ props }) {
  super(props);
 }
 render() {
  return (
   <section className={styles.wrappeCards}>
    <Searchbar />
    <Cards userData={this.props.userData} />
   </section>
  );
 }
}

export default Mainbar;
