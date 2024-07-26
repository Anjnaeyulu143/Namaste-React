import { IMG_URL } from "./utils/constants";

const Card = (props) => {
  const { item } = props.soupObj;
  const { name, price, min_price, ratings } = item;
  return (
    <div className="card_container">
      <div className="image_container">
        <img src={IMG_URL} />
      </div>
      <div className="about_item">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Min Price: {min_price}</p>
        <p>Rating: {ratings}/5</p>
        <p>Delivery Time: 30 mins</p>
      </div>
    </div>
  );
};

export default Card;
