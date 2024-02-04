
const CardComponent = (props) => {
    const {id, name,imageUrl  ,rating, deliveryTime}=props.data;
    
    return (
      <div className="restaurant-container" key={id}>
        <div className="restaurant-card">
          <img
            alt="restMeghana"
            src={imageUrl}
          />
        </div>
        <div className="restDetail">
          <div className="card-title">
            <h2>{name}</h2>
          </div>
          <div className="card-middle">
            <div className="start-rating">
              <span> {rating}</span>
            </div>
            <div className="deliveryTime">
              <span> {deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default CardComponent;  