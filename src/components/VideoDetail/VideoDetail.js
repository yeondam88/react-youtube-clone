import React from "react";

const VideoDetail = props => {
  return (
    <div className="box video-meta">
      <div className="video-title">A video title would go here</div>
      <br />
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://placehold.it/128x128" alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <div className="columns">
              <div className="column is-6">
                <p>
                  <strong>jsmith</strong>
                  <br />
                  <a href="#" className="button is-danger">
                    Subscribe
                  </a>
                </p>
              </div>
              <div className="column is-6">
                <nav className="nav">
                  <div className="container">
                    <div className="nav-right">
                      <a className="nav-item is-tab is-active">
                        <span className="title is-4">124 304 views</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <nav className="level">
              <p className="level-item has-text-left">
                <a className="button is-default">
                  <span className="icon">
                    <i className="fa fa-plus" />
                  </span>{" "}
                  <span>Add to</span>
                </a>
                <a className="button is-default">
                  <span className="icon">
                    <i className="fa fa-share" />
                  </span>{" "}
                  <span>Share</span>
                </a>
                <a className="button is-default">
                  <span className="icon">
                    <i className="fa fa-ellipsis-h" />
                  </span>{" "}
                  <span>More</span>
                </a>
              </p>
              <p className="level-item has-text-right">
                <a className="button is-default">
                  <i className="fa fa-thumbs-up" /> 5254
                </a>
                <a className="button is-default">
                  <i className="fa fa-thumbs-down" /> 1
                </a>
              </p>
            </nav>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoDetail;
