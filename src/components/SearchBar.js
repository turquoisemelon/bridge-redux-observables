import React, { Component } from 'react';

require('./SearchBar.css');

class SearchBar extends Component {
  render() {
    const { onSearchTyped, onSearchTermSubmit, searchInput } = this.props;
    return <div className="search-bar">
      <label>
        <input
          onChange={(event) => onSearchTyped(event.target.value)}
          name="searchTerm"
          type="text"
          placeholder="Search"
          required
        />
      </label>
      <button onClick={(event) => {onSearchTermSubmit(searchInput)}}>Search</button>
    </div>
  }
}


export default SearchBar;
