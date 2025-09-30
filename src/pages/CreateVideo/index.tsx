import './CreateVideo.css';
import VideoFileUpload from './VideoFileUpload';
import ThumbnailUpload from './ThumbnailUpload';
import { useState } from 'react';
import { videoRepository } from '../../modules/videos/video.repository';

function CreateVideo() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);

  const createVideo = async () => {
    if (selectedVideo == null || selectedThumbnail == null || !title.trim()) {
      return;
    }
    try {
      const video = await videoRepository.create({
        video: selectedVideo,
        thumbnail: selectedThumbnail,
        title,
        description,
        isPublic,
      });
      console.log(video);
    } catch (error) {
      console.error(error);
    }

  }

  const clearForm = () => {
    setSelectedVideo(null);
    setSelectedThumbnail(null);
    setTitle("");
    setDescription("");
    setIsPublic(false);
  }

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
          <VideoFileUpload selectedFile={selectedVideo} onFileSelect={setSelectedVideo} />
          <ThumbnailUpload selectedFile={selectedThumbnail} onFileSelect={setSelectedThumbnail} />
          <div className="upload-section">
            <h2 className="section-title">
              タイトル <span className="required">*</span>
            </h2>
            <input
              type="text"
              className="title-input"
              placeholder="動画のタイトルを入力してください"
              maxLength={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="input-counter">{title.length}/100</p>
          </div>

          <div className="upload-section">
            <h2 className="section-title">説明</h2>
            <textarea
              className="description-textarea"
              placeholder="動画の説明を入力してください（オプション）"
              maxLength={1000}
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="input-counter">{description.length}/1000</p>
          </div>
          <div className="upload-section">
            <h2 className="section-title">公開設定</h2>
            <select className="title-input" value={isPublic ? "public" : "private"} onChange={(e) => setIsPublic(e.target.value === "public")}>
              <option value="public">公開</option>
              <option value="private">非公開</option>
            </select>
          </div>
          <div className="upload-actions">
            <button className="upload-button" onClick={createVideo} disabled={selectedVideo == null || selectedThumbnail == null || !title.trim()}>動画をアップロード</button>
            <button className="cancel-button" onClick={clearForm}>クリア</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateVideo;
