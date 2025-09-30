import type { FlashMessage } from '../../modules/flash-message/flash-message.state';
import './FlashMessage.css';

interface Props {
  message: FlashMessage;
}

const FlashMessageArea = ({ message }: Props) => {
  return (
    <div className="flash-message-container">
      <div className={`flash-message ${message.type}`}>
        <span className="flash-message-icon">{message.type === 'success' ? '✅' : '❌'}</span>
        <span className="flash-message-text">{message.content}</span>
      </div>
    </div>
  );
};

export default FlashMessageArea;
