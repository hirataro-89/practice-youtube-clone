import { useNavigate } from "react-router-dom";
import type { Video } from "../../modules/videos/video.entity";

type Props = {
  video: Video
}

const VideoCard = ({video}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="video-card" onClick={() => navigate(`/video/${video.id}`)}>
      <div className="video-thumbnail">
        <img
          src={video.thumbnailUrl}
          alt="Video thumbnail"
        />
      </div>
      <div className="video-info">
        <div className="channel-avatar">
          <img
            src={video.user.iconUrl}
            alt="Channel"
          />
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">{video.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
