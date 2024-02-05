import { useState } from "react";


export const SearchComponent = ({topRatedProps}) => {
  
    const [input,setInput]=useState('')
   const filterTopRated=()=>{
          console.log("toprated")
    topRatedProps((data)=>data.filter(item=>item.rating>4.3).sort((a,b)=>a.rating-b.rating))}

    const handleInput=(e)=>{
        setInput(e.target.value)
        console.log("input tag")
    topRatedProps(data=>data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const filterSearch=(e)=>{
        console.log(input)
        console.log("input button")
        topRatedProps(data=>data.filter(item=>item.name.toLowerCase()==input.toLowerCase()))
    }
  return (
    <div className="searchContainer">
      <div className="search">
        <input
          type="text"
          value={input}
          className="search-input"
          placeholder="Please search here"
          onChange={handleInput}
        />
        <button id="search-item-btn" value="ramesh" onClick={filterSearch}>Search</button>
      </div>
      <button className="topRatedRestaurant" onClick={filterTopRated}>
        Top Rated Restaurant
      </button>
    </div>
  );
};

































// export const SearchComponent = ({ onFilter, onSearch}) => {
  
//     const [value,setValue]=useState('')
// const filterFromChild=()=>{
//     // console.log("childClicked")
//     // onFilter(data="RAM")
//     onFilter(prevData=>prevData.filter(item=>item.rating>4.5))
// }

// const searchlist =(e)=>{
//     console.log("I am in search list")
//     setValue(e.target.value)
//     // onSearch();
//     // const newdata=dataSet.filter(item=>item.name.includes(inputValue))
//     // console.log(newdata)
//      onSearch(restaurantList=>restaurantList.filter(item=>item.name.includes(e.target.value)))
//     // onSearch(prevData=prevData.map(item=>item.name).filter(item=>item==inputValue))
//     // console.log(inputValue)
//     // console.log(search)
    
// }

// const handleClick=(e)=>{
//     e.preventDefault();
//     console.log("this is handle click")
//     onSearch(restaurantList=>restaurantList.filter(item=>item.name==value))

// }
// console.log("im rerendering")
//   return (
//     <div className="searchContainer">
//       <div className="search">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Please search here"
          
//           onChange={searchlist}
//         />
//         <button id="search-item-btn" onClick={handleClick}>Search</button>
//       </div>
//       {/* we are just calling that props function passed from the parent component */}
//       {/* <button className="topRatedRestaurant" onClick={onFilter}>
//         Top Rated Restaurant
//       </button> */}

//       {/* Here we want to create the eventhandler to the child Component and  */}
//       <button className="topRatedRestaurant" onClick={filterFromChild}>
//         Top Rated Restaurant
//       </button>
//     </div>
//   );
// };
