import "./card.css";

const CardComponent = (props) => {
  return (
    <div className="box">
      <div className="items">
        <h3 className="item-header">{props.itemHeader}</h3>
        <p className="item-paragraph">{props.itemPara1}</p>
        <p className="item-paragraph">{props.itemPara2}</p>
      </div>
    </div>
  );
};

export default CardComponent;
