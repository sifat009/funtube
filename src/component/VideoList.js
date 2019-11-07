import React from "react";
import Video from "./Video";

class VideoList extends React.Component {
  render() {
    return this.props.videoList.map((video, index) => {
      return <Video key={index} video={video} />;
    });
  }
}

export default VideoList;
