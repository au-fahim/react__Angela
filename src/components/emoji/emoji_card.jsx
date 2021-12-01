import react from "react";

function EmojiCard(props) {
  return (
    <div className="card_item">
      <div className="card_wrapper">
        <img src={`${props.img}`} alt="emoji_image" />
        <h2>{props.title}</h2>
        <p>{props.dtl}</p>
      </div>
    </div>
  );
}

export default EmojiCard;
