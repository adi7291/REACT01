import { useState } from "react";

import Restaurant from "./Restaurant";
import { SearchComponent } from "./SearchComponent";// it is called named import of component.
//importing mock data
import {restData} from '../utils/mockData';


const Body = () => {

  const [mockData , setMockData]=useState(restData)
  
  const handleTopRated=(abc)=>{
    // console.log("body component called")
       setMockData(abc(restData))
  }
  
    return (
      <div className="bodyContainer">
        {/* search component */}
    
        <SearchComponent topRatedProps={handleTopRated}/>
        {/* Restaurant Component */}
        <Restaurant restProps={mockData}/>
      </div>
    );
  };
  export default Body;
  







































// const Body = () => {

//   const [data,setData]=useState(restData);

// //   Here we are creating a function which include logic to filter some data and that handler
// //  function is passed as props to the SearchComponent.I search component we are just passing that 
// // function to onClick handler.
//   // const handleFilter =()=>{
//   //   const filterData= data.filter(item=>item.rating>4.5)
//   //   // console.log(filterData);
//   //   setData(filterData)
//   // }

// //If we want to create a event handler in the childComponent(SearchComponent) and pass 
// // that function to the parent Component(Body) we can perform the same action as we did
// // above. this is called passing props from child to parent.
// //This is not a good practice to implement in react.
  
// const handleFilter =(ChildFunction)=>{
//   // console.log("Parent Clicked");
//   // console.log(ChildFunction)

//   setData(ChildFunction(restData))

  
// }
// const searchByName=(inputChangeFunction)=>{
//   // console.log("ramesh")
//    setData(inputChangeFunction(restData));

//   // const dataname=data.map(item=>item.name);
//   // const datafilter=dataname.filter(item=>item==inputChangeFunction)
//   // console.log(dataname);
//   // console.log(datafilter);
//   // console.log(inputChangeFunction);
//   console.log("i am inside search name")
//   // console.log(inputChangeFunction)
  
// } 

//     return (
//       <div className="bodyContainer">
//         {/* search component */}
//         {/* <SearchComponent onFilter={handleFilter}/> */}
//         <SearchComponent onFilter={handleFilter} onSearch={searchByName}/>
//         {/* Restaurant Component */}
//         <Restaurant restaurants={data} />
//       </div>
//     );
//   };
//   export default Body;
  