import React from "react";
import emoji from "./emoji_array";

function UpdateEmojiMeaning() {
  return (
    <h1>
      {emoji.map(function (dtl_item) {
        return dtl_item.dtl.substring(0, 50);
      })}
    </h1>
  );
}

export default UpdateEmojiMeaning;
