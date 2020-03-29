import React, { Component, createContext } from 'react';
import db from '../Firebase';

export const DataContext = createContext();

class DataContextProvider extends Component {
 state = {
  //log in
  users: [],
  contacts: [],
  userName: '',
  userPassword: '',
  userId: undefined,
  singIn: false,
  //adding new user
  loggInNew: '',
  passwordNew: '',
  dublicatePasswordNew: '',
  companyNew: '',
  proffesionNew: '',
  positionNew: '',
  checked: false,
  //state for new contact
  companyNameNew: '',
  companyCountryNew: '',
  companyWWWNew: '',
  companyProffesionNew: '',
  contactNameNew: '',
  contactEmailNew: '',
  contactPhoneNew: '',
  contactPositionNew: '',
  descriptionNew: '',
  //state for editing contact
  companyNameEdit: '',
  companyCountryEdit: '',
  companyWWWEdit: '',
  companyProffesionEdit: '',
  contactNameEdit: '',
  contactEmailEdit: '',
  contactPhoneEdit: '',
  contactPositionEdit: '',
  descriptionEdit: '',
  contacId: '',
  //state for profile
  loggIn: '',
  password: '',
  dublicatePassword: '',
  company: '',
  position: '',
  proffesio: ''
 };
 // Getting data from firebase
 loadData = () => {
  db
   .collection('users')
   .get()
   .then(snapshot => {
    const usersArr = [];
    snapshot.docs.map(doc => {
     let user = doc.data();
     user.userId = doc.id;
     return usersArr.push(user);
    });
    this.setState({ users: usersArr });
   });
  db
   .collection('contacts')
   .get()
   .then(snapshot => {
    const contactsArr = [];
    snapshot.docs.map(doc => {
     let contact = doc.data();
     contact.contacId = doc.id;
     return contactsArr.push(contact);
    });
    this.setState({ contacts: contactsArr });
   });
 };

 componentDidMount() {
  this.loadData();
 }

 //Handle loggin process
 handleChangeInput = e => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 };

 handleLoggin = e => {
  e.preventDefault();
  const matchingUser = this.state.users.find(user => {
   return user.loggIn === this.state.userName && user.password === this.state.password;
  });
  if (matchingUser) {
   this.setState({ userName: '', password: '', userId: matchingUser.userId });
  } else {
   this.setState({ userId: undefined });
  }
 };

 handleLogOut = e => {
  e.preventDefault();
  this.setState({ userId: undefined });
 };

 //adding new user new user to data

 handleSingIn = e => {
  e.preventDefault();
  this.setState({ singIn: !this.state.singIn });
 };

 hangleCheckbox = e => {
  e.preventDefault();
  this.setState({ checked: e.target.checked });
 };

 handleSingUp = e => {
  e.preventDefault();
  const {
   loggInNew,
   passwordNew,
   dublicatePasswordNew,
   companyNew,
   proffesionNew,
   positionNew
  } = this.state;

  const errors = [];
  if (
   loggInNew.length < 2 &&
   companyNew.length < 2 &&
   proffesionNew.length < 2 &&
   positionNew.length < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (passwordNew !== dublicatePasswordNew) {
   errors.push('password and double password must be identify,');
   alert('password and double password must be identify,');
  }
  if (this.state.checked === false) {
   alert('Please accept requlations');
  }
  if (this.state.checked === true && errors.length === 0) {
   const newPerson = {
    loggIn: loggInNew,
    password: passwordNew,
    dublicatePassword: dublicatePasswordNew,
    company: companyNew,
    proffesion: proffesionNew,
    possition: positionNew
   };
   db
    .collection('users')
    .add(newPerson)
    .then(() => this.loadData());
   alert('Congratulation, you sing in to ShowCase!');
   this.singOut(e);
   this.setState({ newUser: newPerson });
  } else {
   alert('Please fill in all fields correctly.');
  }
 };

 //adding new contact card to data

 handleUploadContact = e => {
  e.preventDefault();
  const {
   companyNameNew,
   companyCountryNew,
   companyWWWNew,
   companyProffesionNew,
   contactNameNew,
   contactEmailNew,
   contactPhoneNew,
   contactPositionNew,
   descriptionNew,
   userId
  } = this.state;
  const errors = [];
  if (
   companyNameNew < 2 &&
   companyCountryNew < 2 &&
   companyWWWNew < 2 &&
   companyProffesionNew < 2 &&
   contactNameNew < 2 &&
   contactEmailNew < 2 &&
   contactPhoneNew < 2 &&
   contactPositionNew < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (errors.length === 0) {
   const newContact = {
    companyName: companyNameNew,
    companyCountry: companyCountryNew,
    companyWWW: companyWWWNew,
    companyProffesion: companyProffesionNew,
    contactName: contactNameNew,
    contactEmail: contactEmailNew,
    contactPhone: contactPhoneNew,
    contactPosition: contactPositionNew,
    description: descriptionNew,
    userId
   };
   db
    .collection('contacts')
    .add(newContact)
    .then(() => this.loadData());
   alert('your contacts has been saved.');
  } else {
   alert('Please fill in all fields correctly.');
  }
 };

 // Editing contact from data
 handleSaveChange = e => {
  e.preventDefault();
  const {
   companyNameEdit,
   companyCountryEdit,
   companyWWWEdit,
   companyProffesionEdit,
   contactNameEdit,
   contactEmailEdit,
   contactPhoneEdit,
   contactPositionEdit,
   descriptionEdit,
   contacId,
   userId
  } = this.state;
  const errors = [];
  if (
   companyNameEdit < 2 &&
   companyCountryEdit < 2 &&
   companyWWWEdit < 2 &&
   companyProffesionEdit < 2 &&
   contactNameEdit < 2 &&
   contactEmailEdit < 2 &&
   contactPhoneEdit < 2 &&
   contactPositionEdit < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (errors.length === 0) {
   const editContact = {
    companyName: companyNameEdit,
    companyCountry: companyCountryEdit,
    companyWWW: companyWWWEdit,
    companyProffesion: companyProffesionEdit,
    contactName: contactNameEdit,
    contactEmail: contactEmailEdit,
    contactPhone: contactPhoneEdit,
    contactPosition: contactPositionEdit,
    description: descriptionEdit,
    contacId,
    userId
   };
   db
    .collection('contacts')
    .doc(contacId)
    .update(editContact)
    .then(() => this.loadData());
   alert('Your change has been saved');
  } else {
   alert('Please fill in all fields correctly.');
  }
 };

 //User profile

 editingProfile = () => {
  const currnetUser = this.state.usersData.find(user => {
   if (user.userId === this.state.userIdEdit) {
    return user;
   }
   return null;
  });
  this.setState({
   loggIn: currnetUser.loggIn,
   password: currnetUser.password,
   dublicatePassword: currnetUser.password,
   company: currnetUser.company,
   position: currnetUser.position,
   proffesion: currnetUser.proffesion
  });
 };

 handleSaveChangeUser = e => {
  e.preventDefault();
  const {
   loggInEdit,
   passwordEdit,
   dublicatePasswordEdit,
   companyEdit,
   positionEdit,
   proffesionEdit,
   userId
  } = this.state;
  const errors = [];
  if (
   loggInEdit.length < 2 &&
   companyEdit.length < 2 &&
   proffesionEdit.length < 2 &&
   positionEdit.length < 2
  ) {
   errors.push('File must hes at liest 2 letter word.');
   alert('File must hes at liest 2 letter word.');
  }
  if (passwordEdit !== dublicatePasswordEdit) {
   errors.push('password and double password must be identify,');
   alert('password and double password must be identify,');
  }
  if (errors.length === 0) {
   const upDatePerson = {
    loggIn: loggInEdit,
    password: passwordEdit,
    company: companyEdit,
    proffesion: proffesionEdit,
    possition: positionEdit,
    userId
   };
   db
    .collection('users')
    .doc(userId)
    .update(upDatePerson)
    .then(() => this.loadData());
   alert('Your change has been saved');
  } else {
   alert('Please fill in all fields correctly.');
  }
 };
 render() {
  return (
   <DataContext.Provider
    value={{
     ...this.state,
     handleChangeInput: this.handleChangeInput,
     handleLoggin: this.handleLoggin,
     handleLogOut: this.handleLogOut,
     handleSingIn: this.handleSingIn,
     hangleCheckbox: this.hangleCheckbox,
     handleSingUp: this.handleSingUp,
     handleUploadContact: this.handleUploadContact,
     handleSaveChange: this.handleSaveChange,
     handleSaveChangeUser: this.handleSaveChangeUser
    }}
   >
    {this.props.children}
   </DataContext.Provider>
  );
 }
}

export default DataContextProvider;
