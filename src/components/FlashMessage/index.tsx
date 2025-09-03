import './FlashMessage.css';

const FlashMessageArea = () => {
  return (
    <div className="flash-message-container">
      <div className={`flash-message `}>
        <span className="flash-message-icon"></span>
        <span className="flash-message-text"></span>
      </div>
    </div>
  );
};

export default FlashMessageArea;
