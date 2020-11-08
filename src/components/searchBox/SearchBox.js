import React from 'react';

function SearchBox(props) {

  let searchFieldValue = '';

  return(
    <div>
        <input onChange={e => {searchFieldValue = e.target.value}} type="text"></input>
        <button onClick={() => props.searchHandler(searchFieldValue)}> Search</button>
    </div>
  );
}

export default SearchBox;