import React from 'react';
import styles from '../Main/Mainbar.module.scss';
import Searchbar from '../../components/Searchbar';
import Cards from '../../components/Cards';
import Button from '../../components/Button';
import db from '../../Firebase';

class Mainbar extends React.Component {
 constructor({ props }) {
  super(props);
  this.state = {
   userContacts: [],
   allUserContacts: [],
   visible: 4,
   searchValue: '',
   searchType: ''
  };
 }
 componentDidMount() {
  const userContacts = this.props.contactData.filter(contact => {
   return contact.userId === this.props.userId && contact;
  });
  this.setState({
   userContacts: [...userContacts],
   allUserContacts: [...userContacts]
  });
 }

 handleLoadMore = e => {
  e.preventDefault();
  this.setState({ visible: this.state.visible + 2 });
 };

 handleSearchValue = e => {
  e.preventDefault();
  this.setState({ searchValue: e.target.value });
 };

 showSearchResults = e => {
  e.preventDefault();
  let filterContacts = this.state.userContacts.filter(contact => {
   if (this.state.searchType === 'companyCountry') {
    return contact.companyCountry.indexOf(this.state.searchValue) !== -1;
   } else if (this.state.searchType === 'companyName') {
    return contact.companyName.indexOf(this.state.searchValue) !== -1;
   } else {
    return null;
   }
  });
  if (this.state.searchType === '') {
   return this.setState({
    userContacts: this.state.allUserContacts,
    searchValue: ''
   });
  }
  this.setState({ userContacts: filterContacts, searchValue: '' });
 };

 getSearchType = e => {
  e.preventDefault();
  this.setState({ searchType: e.target.value });
 };

 deleteContacts = (e, id) => {
  e.preventDefault();
  db
   .collection('contacts')
   .doc(id)
   .delete()
   .then(() => this.props.loadData());
 };
 render() {
  return (
   <section className={styles.wrappeCards}>
    <Searchbar
     searchValue={this.state.searchValue}
     searchType={e => {
      this.getSearchType(e);
     }}
     eventHandle={e => {
      this.handleSearchValue(e);
     }}
     eventShow={e => {
      this.showSearchResults(e);
     }}
    />
    <Cards
     visible={this.state.visible}
     userData={this.state.userContacts}
     handleEditContact={this.props.handleEditContact}
     handleDeleteContact={this.deleteContacts}
    />
    {this.state.userContacts.length > this.state.visible && (
     <Button
      type="button"
      value="load more."
      eventHandle={e => {
       this.handleLoadMore(e);
      }}
     />
    )}
   </section>
  );
 }
}

export default Mainbar;
