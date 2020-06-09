import React, { Component } from 'react';
import styles from './IntroPannel.module.scss';

class IntroPannel extends Component {
    state = {  }
    render() { 
        return ( 
        <main className={styles.wrapperMain}>
          <h1 className={styles.loading}>Welcom to show case app.</h1>
        </main>
         );
    }
}
 
export default IntroPannel;