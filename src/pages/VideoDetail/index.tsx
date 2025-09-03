import './VideoDetail.css';

function VideoDetail() {
  return (
    <>
      <div className="layout">
        <main className="video-detail-main">
          <div className="video-detail-container">
            <div className="video-main-content">
              <div className="video-player">
                <video
                  controls
                  poster="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                >
                  <source />
                </video>
              </div>
              <div className="video-info-section">
                <h1 className="video-detail-title">テストビデオ</h1>
                <div className="video-meta-bar">
                  <div className="video-stats">
                    <span className="upload-date">
                      2025-01-01 12:00:00 アップロード
                    </span>
                  </div>
                </div>
              </div>
              <div className="channel-info-section">
                <div className="video-detail-video-description">
                  テストビデオの説明
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VideoDetail;
