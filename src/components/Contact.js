import React from 'react';
import styles from './Contact.module.scss'
import { Link } from 'react-router-dom';
import Cross from '../assets/cross.png';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions/contactActions'

const Contact = (props) => {

    const handleDeleteContact = (id) =>{
        props.deleteContact(id)
        props.history.push('/');
    };

    const { contact } = props;
    if(contact){
        return(
            <section className={styles.wrapper}>
                <div className={styles.contact}>
                    <div className={styles.contactText}>
                        <Link to="/">
                        <button className={styles.crossBtn}>
                            <img src={Cross} alt={'cross'} />
                        </button>
                        </Link>
                        <h1>Details about contact</h1>
                    </div>
                    <div className={styles.contactDescription}>
                        <h1>{contact.companyName} <span>from {contact.companyCountry}</span></h1>
                        <h2>{contact.contactName} <span>{contact.contactPosition}</span></h2>
                        <span>phone: {contact.contactPhone}</span>
                        <span>email: {contact.contactEmail}</span>
                        <p>Note: {contact.description}</p>
                    </div>
                    <div className={styles.contactActions}>
                        <button className={styles.buttonAdd}  type={'button'}>
                        <Link to={"/editcontact/" + contact.contactId}>edit.</Link>
                        </button>
                        <button className={styles.buttonAdd}  type={'button'} onClick={()=>handleDeleteContact(contact.contactId)}>
                            delete.
                        </button>
                    </div>
                </div>
            </section>
        )
    } else {
        return(
            <section className={styles.wrapperNoContact}>
                <h1 >Acctually you do not have any contact</h1>
                <button type="button">
                    <Link to="/addcontact">
                        add new contact.
                    </Link>
                </button>
            </section>
        )
    }
}
const mapStateToProps = (state , ownProps) => {
    const id = ownProps.match.params.id;
    const contacts = state.firestore.data.contacts;
    const contact = contacts ? contacts[id] : null ;
    return{
        contact : contact
    }
}
const mapDispatchToProps = dispatch => {
    return{
        deleteContact: id => dispatch(deleteContact(id))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection : 'contacts'}
    ])
)(Contact);