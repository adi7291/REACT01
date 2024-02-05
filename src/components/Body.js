import { useState } from "react";

import Restaurant from "./Restaurant";
import { SearchComponent } from "./SearchComponent";// it is called named import of component.
//importing mock data
import {restData} from '../utils/mockData';

const Body = () => {

  const [data,setData]=useState(restData)

//   Here we are creating a function which include logic to filter some data and that handler
//  function is passed as props to the SearchComponent.I search component we are just passing that 
// function to onClick handler.
  // const handleFilter =()=>{
  //   const filterData= data.filter(item=>item.rating>4.5)
  //   // console.log(filterData);
  //   setData(filterData)
  // }

//If we want to create a event handler in the childComponent(SearchComponent) and pass 
// that function to the parent Component(Body) we can perform the same action as we did
// above. this is called passing props from child to parent.
//This is not a good practice to implement in react.
  
const handleFilter =(ChildFunction)=>{
  // console.log("Parent Clicked");
  // console.log(ChildFunction)

  setData(ChildFunction(data))

  
}
  
    return (
      <div className="bodyContainer">
        {/* search component */}
        {/* <SearchComponent onFilter={handleFilter}/> */}
        <SearchComponent onFilter={handleFilter}/>
        {/* Restaurant Component */}
        <Restaurant restDatas={data} />
      </div>
    );
  };
  export default Body;
  