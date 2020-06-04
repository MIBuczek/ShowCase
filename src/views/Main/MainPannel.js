import React, {Component} from 'react';
import Welcombar from './Welcombar';
import Searchbar from '../../components/Searchbar';
import Cards from '../../components/Cards';
import Button from '../../components/Button';
import styles from './MainPannel.module.scss';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';


class MainPannel extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      user: undefined,
      contacts : undefined
    };
  }
  
  componentDidMount(){
    setTimeout(()=>{
      const { user , contacts } = this.props;
      this.setState({
        user: user,
        contacts: contacts
      })
    },500)
  }

  hadnleSearch( object ){
    console.log(object)
  }

 render(){
    const { user, contacts } = this.state;
    if(user !== undefined && contacts !== undefined){
      return (
        <main className={styles.wrapperMain}>
            <Welcombar user={user} contacts={contacts}/>
          <section className={styles.wrappeCards}>
            <Searchbar hadnleSearch={this.hadnleSearch} />
            <Cards contacts={contacts} />
            {contacts.length > 6 && <Button value='load more.'/>}
          </section>
        </main>
      );
      } else {
        return (
        <main className={styles.wrapperMain}>
          <h1 className={styles.loading}>loading ...</h1>
        </main>
        )
      }
    }
}
const mapStateToProps = (state)=>{
  const id = state.firebase.auth.uid;
  const users = state.firestore.data.users;
  const contacts = state.firestore.data.contacts && Object.values(state.firestore.data.contacts);
  const user = users ? users[id] : null ;
  const userContacts = contacts && contacts.filter(contact => contact.userId === id );

  return{
    auth: state.firebase.auth,
    user : user,
    contacts : userContacts
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : "users" },
    { collection : 'contacts'}
  ])
  )(MainPannel);
