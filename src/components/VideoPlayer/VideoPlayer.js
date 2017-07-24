import React, { Component } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";

class VideoPlayer extends Component {
  render() {
    return (
      <div className="column is-8">
        <div className="image">
          <img src="https://placehold.it/800x500" />
        </div>
        <VideoDetail />
      </div>
    );
  }
}

export default VideoPlayer;
