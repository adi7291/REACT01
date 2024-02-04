export const SearchComponent = ({ onFilter }) => {
  
//   const filterItem = () => {
//     onFilter((prevData) => {console.log(prevData)
//         prevData.filter((item) =>(item.rating>4.5) );
    
//         onFilter()
//     });
//   };
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
      <button className="topRatedRestaurant" onClick={onFilter}>
        Top Rated Restaurant
      </button>
    </div>
  );
};
