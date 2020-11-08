import React from 'react';
import './SearchBox.css'

function SearchBox(props) {

  let searchFieldValue = '';

  return(
    <div className="search-box">
      <div>
        <label>Search for books using key words:</label>
        <input className="input-search" onChange={e => {searchFieldValue = e.target.value}} type="text"></input>
        <button className="input-button" onClick={() => props.keyWordHandler(searchFieldValue)}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;