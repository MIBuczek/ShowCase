import React, { Component }  from 'react';
import styles from '../components/Searchbar.module.scss';

class Searchbar extends Component {
constructor(props) {
    super(props);
    this.state = { 
        searchValue : '',
        searchType : ''
    };
};

handleChangeType(e){
    this.setState({ searchType : e.target.value,})
}
handleChangeInput(e){
    this.setState({ searchValue : e.target.value,})
}
handleResetFilter(e){
    this.setState({
        searchValue : '',
        searchType : ''
    });
}

render(){
    return (
        <section className={styles.serchbar}>
        <form className={styles.serchbarForm} onChange={()=> this.props.hadnleSearch(this.state)}>
            <select className={styles.serchbarSelect}
            id="filterType" name="filterType" value={this.state.searchType} onChange={ e => this.handleChangeType(e) } >
                <option value="">all.</option>
                <option value="companyCountry">country.</option>
                <option value="companyName">company name.</option>
            </select>
            <input  className={styles.serchbarInput} type="text" name="searchValue"
            placeholder="search" value={this.state.searchValue} onChange={ e => this.handleChangeInput(e) } />
            <button className={styles.serchbarBtn} type="button" onClick={()=> this.handleResetFilter()}>
            reset.
            </button>
        </form>
        </section>
    );
};
};
export default Searchbar;
