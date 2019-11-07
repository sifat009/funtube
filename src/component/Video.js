import "./Video.css";
import React from "react";

class Video extends React.Component {
  render() {
    const {
      id: { videoId },
      snippet: {
        title,
        thumbnails: { medium: mediumThumbnail, default: defaultThumbnail }
      }
    } = this.props.video;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div
        className="video item"
        onClick={() => this.props.onVideoSelect(embedUrl)}
      >
        <img
          alt={title}
          className="ui image"
          src={
            this.props.view === "horizontal"
              ? mediumThumbnail.url
              : defaultThumbnail.url
          }
        />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default Video;
