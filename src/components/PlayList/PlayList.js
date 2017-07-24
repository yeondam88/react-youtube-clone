import React from "react";

const PlayList = props => {
  return (
    <div className="column is-4">
      <div className="box related-list">
        <p className="autoplay">
          <span className="autoplay-title">Up next</span>
          <span className="autoplay-toggle">
            Autoplay
            <i className="fa fa-info-circle" />
          </span>
        </p>
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
        <hr />
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
        <article className="media related-card">
          <div className="media-left">
            <figure className="image">
              <img src="http://placehold.it/120x90" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="video-title">A video title</span>
                <span className="video-account">asasdas</span>
                <span className="video-views">239 views</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PlayList;
