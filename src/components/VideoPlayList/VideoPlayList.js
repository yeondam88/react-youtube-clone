import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <article
      onClick={() => onVideoSelect(video)}
      className="media related-card panel-block"
    >
      <div className="media-left">
        <figure className="image">
          <img src={video.thumbnails.default.url} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <span className="video-title">
              {video.title}
            </span>
            <span className="video-account">
              {video.channelTitle}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

const VideoPlayList = ({ videos, onVideoSelect }) => {
  return (
    <div className="column is-12">
      <div className="box related-list">
        <h2>Next Videos</h2>
        <div className="spacer" />
        {videos.map(video => {
          return (
            <VideoListItem
              key={video.id}
              video={video}
              onVideoSelect={onVideoSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoPlayList;
