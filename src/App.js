import React, { Component } from "react";
import { Header, VideoDetail, VideoPlayList } from "./components";
import search from "youtube-search";
import _ from "lodash";
import { opts } from "./config";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  searchVideo = term => {
    search(term, opts, (err, videos) => {
      if (err) return console.log(err);

      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        },
        () => {
          console.dir(videos[0]);
          console.log("fetched the videos");
        }
      );
    });
  };

  componentDidMount() {
    this.searchVideo("JavaScript");
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.searchVideo(term);
    }, 300);

    return (
      <div>
        <Header onSearchTermChange={videoSearch} />
        <div className="spacer" />
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="column is-4">
              <VideoPlayList
                videos={this.state.videos}
                onVideoSelect={selectedVideo =>
                  this.setState({ selectedVideo })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
