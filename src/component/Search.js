import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: ""
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  onInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={e => this.onSearchSubmit(e)}>
          <input
            value={this.state.inputValue}
            type="text"
            placeholder={this.props.placeholder}
            onChange={e => this.onInputChange(e)}
            autoFocus={true}
          />
        </form>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  placeholder: "Search.."
};

export default SearchBar;
