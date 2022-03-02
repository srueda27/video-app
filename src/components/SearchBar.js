import React, { useState } from "react";

const SearchBar = ({ onVideoSearch, inputLabel }) => {
  const [inputValue, setInputValue] = useState('');


  const onFormSubmit = event => {
    event.preventDefault();

    onVideoSearch(setInputValue(inputValue));
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>{inputLabel}</label>
          <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue({ inputValue: e.target.value })} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
