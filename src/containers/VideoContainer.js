import React, { Component } from "react";
import { VideoPlayer, PlayList } from "../components";

class VideoContainer extends Component {
  render() {
    return (
      <div className="columns">
        <VideoPlayer className="column is-8" />
        <PlayList className="column is-4" />
      </div>
    );
  }
}

export default VideoContainer;
