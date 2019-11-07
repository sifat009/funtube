import React from "react";
import SeacrhBar from "./Search";
import youtubeSearch from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videoList: []
  };

  onSearchSubmit = async searchText => {
    try {
      const items = await youtubeSearch(searchText);
      this.setState({ videoList: items });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SeacrhBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.videoList.length > 0 ? (
          <VideoList videoList={this.state.videoList} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
