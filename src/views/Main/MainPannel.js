import React from 'react';
import Welcombar from './Welcombar';
import Mainbar from './Mainbar';
import styles from './MainPannel.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class MainPannel extends React.Component {
 
 render() {

   const {auth}= this.props;
   if(!auth.uid) return <Redirect to='/signin'/>
  
   return (
    <main className={styles.wrapper}>
    <Welcombar />
    <Mainbar />
   </main>
  );
 }
}
const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(MainPannel);
