import React, { Component } from "react";
import VideoContainer from "./VideoContainer";
import search from "youtube-search";

const opts = {
  maxResults: 10,
  key: "AIzaSyBWkl0ifhleMNpS1rh03OFU-PRIxIye3JQ"
};

class Container extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    search("javascript", opts, (err, results) => {
      if (err) return console.log(err);

      this.setState(
        {
          videos: results
        },
        () => {
          console.dir(results);
          console.log("fetched the videos");
        }
      );
    });
  }

  render() {
    return (
      <div className="container">
        <VideoContainer videos={this.state.videos} />
      </div>
    );
  }
}

export default Container;
