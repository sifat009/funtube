import React from "react";
import SeacrhBar from "./Search";
import youtubeSearch from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videoList: [],
    view: "horizontal",
    embedVideUrl: "",
    selectedVideoTitle: ""
  };

  async componentDidMount() {
    try {
      const items = await youtubeSearch("pokemon");
      this.setState({
        videoList: items,
        view: "horizontal"
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSearchSubmit = async searchText => {
    try {
      const items = await youtubeSearch(searchText);
      this.setState({
        videoList: items,
        view: "horizontal"
      });
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = (embedVideUrl, title) => {
    this.setState({
      view: "",
      embedVideUrl,
      selectedVideoTitle: title
    });
  };

  render() {
    const videoLlistGrid =
      this.state.view !== "horizontal"
        ? "five wide column"
        : "sixteen wide column";

    return (
      <div className="ui container">
        <SeacrhBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            {/* Only for iframe view */}
            {this.state.view !== "horizontal" ? (
              <div className="eleven wide column">
                <div className="ui embed">
                  <iframe title="title" src={this.state.embedVideUrl} />
                </div>
                <div className="content">
                  <div className="header">{this.state.selectedVideoTitle}</div>
                </div>
              </div>
            ) : (
              ""
            )}

            {this.state.videoList.length > 0 ? (
              <div className={videoLlistGrid}>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videoList={this.state.videoList}
                  view={this.state.view}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
