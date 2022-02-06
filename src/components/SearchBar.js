import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }
  
  onFormSubmit = event => {
    event.preventDefault();

    //callback from parent component
    this.props.onVideoSearch(this.state.inputValue);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>{this.props.inputText}</label>
            <input
              type='text'
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
