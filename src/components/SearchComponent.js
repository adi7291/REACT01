export const SearchComponent = ({ onFilter }) => {
  
const filterFromChild=()=>{
    // console.log("childClicked")
    // onFilter(data="RAM")
    onFilter(prevData=>prevData.filter(item=>item.rating>4.5))
}
  return (
    <div className="searchContainer">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Please search here"
        />
        <button id="search-item-btn">Search</button>
      </div>
      {/* we are just calling that props function passed from the parent component */}
      {/* <button className="topRatedRestaurant" onClick={onFilter}>
        Top Rated Restaurant
      </button> */}

      {/* Here we want to create the eventhandler to the child Component and  */}
      <button className="topRatedRestaurant" onClick={filterFromChild}>
        Top Rated Restaurant
      </button>
    </div>
  );
};
