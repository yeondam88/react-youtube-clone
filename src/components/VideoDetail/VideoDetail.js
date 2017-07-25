import React from "react";
import moment from "moment";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="set">
        <span className="loading hop">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </span>
      </div>
    );
  }
  const videoId = selectedVideo.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="box">
      <div className="image">
        <iframe
          title={selectedVideo.title}
          src={url}
          width="848"
          height="500"
        />
      </div>
      <div className="box video-meta">
        <div className="video-title">
          <h1>
            {selectedVideo.title}
          </h1>
        </div>
        <br />
        <article className="media">
          <div className="media-content">
            <div className="content">
              <div className="columns">
                <div className="column is-6">
                  <p>
                    Description: {selectedVideo.description}
                    <br />
                    <br />
                    <a href={selectedVideo.link} className="button is-danger">
                      Watch at YouTube
                    </a>
                  </p>
                </div>
                <div className="column is-6">
                  <nav className="nav">
                    <div className="container">
                      <div className="nav-right">
                        <a className="nav-item is-tab is-active">
                          <span className="title is-4">
                            Published at &nbsp;
                            {moment(selectedVideo.publishedAt).format(
                              "MMM Do YY"
                            )}
                          </span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default VideoDetail;
