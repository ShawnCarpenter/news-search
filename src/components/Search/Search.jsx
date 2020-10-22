import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
const Search = ({ searchTerm, onChange, onSubmit }) => (
  <div className={styles.Search}>
    <form onSubmit={onSubmit}>
      <label htmlFor="searchTerm" >Search Term: </label>
      <input 
        name="searchTerm"
        type="text"
        value={searchTerm}
        onChange={onChange}/>
      <button type="submit">Find stuff!</button>
    </form>
  </div>
  
  
  
);

Search.propTypes = {
  searchTerm:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
};
export default Search;
