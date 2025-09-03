import './MyVideos.css';

function MyVideos() {
  return (
    <main className="my-videos-content">
      {/* チャンネルヘッダー */}
      <div className="channel-header">
        <div className="channel-info">
          <div className="my-videos-channel-avatar">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="チャンネル"
            />
          </div>
          <div className="channel-details">
            <h1 className="channel-title">テストユーザーのコンテンツ</h1>
          </div>
        </div>
      </div>

      {/* 動画テーブル */}
      <div className="videos-table-container">
        <table className="videos-table">
          <thead>
            <tr>
              <th className="video-column">動画</th>
              <th className="visibility-column">公開設定</th>
              <th className="date-column">
                <button className="sort-button">アップロード日</button>
              </th>
              <th className="actions-column">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr className="video-row">
              <td className="video-cell">
                <div className="my-videos-video-info">
                  <div className="my-videos-video-thumbnail">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      alt="テスト動画"
                      className="thumbnail-image"
                    />
                  </div>
                  <div className="my-videos-video-details">
                    <h3 className="my-videos-video-title">テスト動画</h3>
                    <p className="video-description">テスト動画の説明</p>
                  </div>
                </div>
              </td>
              <td className="visibility-cell">
                <div className="visibility-status">
                  <div className="visibility-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    {/* <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                      </svg> */}
                  </div>
                  <select
                    className="visibility-select"
                  >
                    <option value="公開">公開</option>
                    <option value="非公開">非公開</option>
                  </select>
                </div>
              </td>
              <td className="date-cell">
                <div className="date-info">
                  <div className="upload-date">2025-01-01 12:00:00</div>
                </div>
              </td>
              <td className="actions-cell">
                <button className="delete-button">削除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default MyVideos;
