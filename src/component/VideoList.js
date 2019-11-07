import React from "react";
import Video from "./Video";

class VideoList extends React.Component {
  renderVideoList = () => {
    return this.props.videoList.map((video, index) => {
      return (
        <Video
          onVideoSelect={this.props.onVideoSelect}
          view={this.props.view}
          key={index}
          video={video}
        />
      );
    });
  };
  render() {
    const containerClass =
      this.props.view === "horizontal"
        ? "video-list ui horizontal list"
        : "video-list ui relaxed divided list";
    return <div className={containerClass}>{this.renderVideoList()}</div>;
  }
}

export default VideoList;
