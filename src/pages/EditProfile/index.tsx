import './EditProfile.css';

function EditProfile() {
  return (
    <main>
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <h1 className="edit-profile-title">プロフィール編集</h1>
          <p className="edit-profile-subtitle">
            アバター画像とユーザー名を編集できます
          </p>
        </div>

        <div className="edit-profile-form">
          <div className="edit-profile-section">
            <h2 className="section-title">アバター画像</h2>
            <div className="avatar-edit-container">
              <div className="current-avatar">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt="Current Avatar"
                  className="avatar-preview"
                />
              </div>
              <div className={`avatar-drop-zone`}>
                <div className="drop-content">
                  <div className="upload-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                  <p className="drop-text">
                    新しいアバター画像をドラッグ＆ドロップ
                  </p>
                  <label className="file-select-button">
                    ファイルを選択
                    <input type="file" accept="image/*" hidden />
                  </label>
                  <p className="file-format-text">
                    対応形式: JPG, PNG
                  </p>
                </div>
                {/* <button
                    className="remove-avatar"
                  >
                    元に戻す
                  </button> */}
              </div>
            </div>
          </div>

          <div className="edit-profile-section">
            <h2 className="section-title">
              ユーザー名 <span className="required">*</span>
            </h2>
            <input
              type="text"
              className="username-input"
              placeholder="ユーザー名を入力してください"
            />
          </div>

          <div className="edit-profile-actions">
            <button className="save-button">変更を保存</button>
            <button className="cancel-button">キャンセル</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProfile;
