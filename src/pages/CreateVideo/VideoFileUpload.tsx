function VideoFileUpload() {
  return (
    <div className="upload-section">
      <h2 className="section-title">
        動画ファイル<span className="required">*</span>
      </h2>
      <div className={`file-drop-zone`}>
        {/* <div className="file-info">
            <div className="file-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
              </svg>
            </div>
            <div className="file-details">
              <p className="file-name">{selectedFile.name}</p>
            </div>
            <button className="remove-file" onClick={() => onFileSelect(null)}>
              ✕
            </button>
          </div> */}
        <div className="drop-content">
          <div className="upload-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>
          </div>
          <p className="drop-text">動画ファイルをドラッグ＆ドロップ</p>
          <label className="file-select-button">
            ファイルを選択
            <input type="file" accept="video/*" hidden />
          </label>
          <p className="file-format-text">対応形式: MP4, MOV, AVI</p>
        </div>
      </div>
    </div>
  );
}

export default VideoFileUpload;
