import React from 'react';
import styles from '../Main/Mainbar.module.scss';
import Searchbar from '../../components/Searchbar';
import Cards from '../../components/Cards';
import Button from '../../components/Button';

class Mainbar extends React.Component {
 constructor({ props }) {
  super(props);
  this.state = {
   userContacts: [],
   visible: 4,
   searchValue: '',
   searchType: ''
  };
 }
 componentDidMount() {
  const userContacts = this.props.contactData.filter(contact => {
   return (
    contact.userId === this.props.userData[this.props.userId].id && contact
   );
  });
  this.setState({ userContacts: [...userContacts] });
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
  let filterContacts = this.state.contactData.filter(contact => {
   if (this.state.searchType === 'companyCountry') {
    return contact.companyCountry.indexOf(this.state.searchValue) !== -1;
   } else {
    return contact.companyName.indexOf(this.state.searchValue) !== -1;
   }
  });
  this.setState({ userContacts: filterContacts });
 };

 getSearchType = e => {
  e.preventDefault();
  this.setState({ searchType: e.target.value });
 };

 deleteContacts = (e, id) => {
  e.preventDefault();
  fetch(`http://localhost:4000/contacts/${id}`, {
   method: 'DELETE'
  })
   .then(response => response.json())
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
