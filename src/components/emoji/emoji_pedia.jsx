import React from "react";
import emoji from "./emoji_array";
import EmojiCard from "./emoji_card";

function EmojiData(emoji) {
  return (
    <EmojiCard
      key={emoji.id}
      img={emoji.img}
      title={emoji.title}
      dtl={emoji.dtl}
    />
  );
}

function EmojiPedia() {
  return (
    <div className="emoji">
      <div className="mainInner">
        <div className="header_title">
          <h1>Emoji Pedia</h1>
        </div>
        <div className="card__container">{emoji.map(EmojiCard)}</div>
      </div>
    </div>
  );
}

export default EmojiPedia;
