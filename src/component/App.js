import React from "react";
import SeacrhBar from "./Search";

class App extends React.Component {
  onSearchSubmit = searchText => {
    console.log(searchText);
  };

  render() {
    return (
      <div className="ui container">
        <SeacrhBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
