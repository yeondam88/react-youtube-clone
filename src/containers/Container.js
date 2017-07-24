import React, { Component } from "react";
import VideoContainer from "./VideoContainer";
import search from "youtube-search";

const opts = {
  maxResults: 10,
  key: "AIzaSyBWkl0ifhleMNpS1rh03OFU-PRIxIye3JQ"
};

class Container extends Component {
  componentDidMount() {
    search("javascript", opts, function(err, results) {
      if (err) return console.log(err);

      console.dir(results);
    });
  }

  render() {
    return (
      <div className="container">
        <VideoContainer />
      </div>
    );
  }
}

export default Container;
