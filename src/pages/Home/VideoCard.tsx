const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="Video thumbnail"
        />
      </div>
      <div className="video-info">
        <div className="channel-avatar">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="Channel"
          />
        </div>
        <div className="video-details">
          <h3 className="video-title">テストビデオ</h3>
          <p className="channel-name">テストユーザー</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
