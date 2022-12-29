import "./Card.css";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="cards">
      <img src={image} alt="" className="card-img"/>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-text">{subtitle}</h6>
    </div>
  );
};

export default Card;
