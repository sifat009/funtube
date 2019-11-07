import React from "react";

class Video extends React.Component {
  render() {
    const {
      id: { videoId },
      snippet: {
        title,
        thumbnails: { default: defaultThumbnail }
      }
    } = this.props.video;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log({ videoId, title, defaultThumbnail, embedUrl });
    return <div>video</div>;
  }
}

export default Video;
