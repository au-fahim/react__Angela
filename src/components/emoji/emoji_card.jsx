import react from "react";

function EmojiCard(props) {
  let readMore = <a href="#">Read More</a>;

  let threeDot = function (item, readMore) {
    return item.length > 25 ? " ..." : "";
  };

  return (
    <dl className="card_item">
      <div className="card_wrapper">
        <dt>
          <img src={`${props.img}`} alt={`${props.title.slice(0, 1)}`} />
          <h2>{props.title}</h2>
        </dt>
        <dd>{props.dtl.substring(0, 150) + threeDot(props.dtl)}</dd>
      </div>
    </dl>
  );
}

export default EmojiCard;
