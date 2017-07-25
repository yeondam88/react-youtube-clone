import React, { Component } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";

class VideoPlayer extends Component {
  render() {
    const video = this.props.videos.map(video => {
      return <VideoDetail details={video} />;
    });
    return (
      <div className="column is-8">
        {video}
      </div>
    );
  }
}

export default VideoPlayer;
