import './CreateVideo.css';
import VideoFileUpload from './VideoFileUpload';
import ThumbnailUpload from './ThumbnailUpload';

function CreateVideo() {
  return (
    <main>
      <div className="upload-container">
        <div className="upload-header">
          <h1 className="upload-title">動画をアップロード</h1>
          <p className="upload-subtitle">
            アップロードする動画の情報を入力してください
          </p>
        </div>
        <div className="upload-form">
          <VideoFileUpload />
          <ThumbnailUpload />
          <div className="upload-section">
            <h2 className="section-title">
              タイトル <span className="required">*</span>
            </h2>
            <input
              type="text"
              className="title-input"
              placeholder="動画のタイトルを入力してください"
              maxLength={100}
            />
            <p className="input-counter">0/100</p>
          </div>

          <div className="upload-section">
            <h2 className="section-title">説明</h2>
            <textarea
              className="description-textarea"
              placeholder="動画の説明を入力してください（オプション）"
              maxLength={1000}
              rows={6}
            />
            <p className="input-counter">0/1000</p>
          </div>
          <div className="upload-section">
            <h2 className="section-title">公開設定</h2>
            <select className="title-input">
              <option value="public">公開</option>
              <option value="private">非公開</option>
            </select>
          </div>
          <div className="upload-actions">
            <button className="upload-button">動画をアップロード</button>
            <button className="cancel-button">クリア</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateVideo;
