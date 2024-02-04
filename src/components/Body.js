import { useState } from "react";

import Restaurant from "./Restaurant";
import { SearchComponent } from "./SearchComponent";// it is called named import of component.
//importing mock data
import {restData} from '../utils/mockData';

const Body = () => {
   console.log(typeof restData)
  const [filterData,setFilterData]=useState(restData);  
console.log(filterData);
  const handleFilter=()=>{
    setFilterData(prevData=>prevData.filter(item=>item.rating>4.5))

  }
  
    return (
      <div className="bodyContainer">
        {/* search component */}
        <SearchComponent onFilter={handleFilter}/>
        {/* Restaurant Component */}
        <Restaurant restDatas={filterData} />
      </div>
    );
  };
  export default Body;
  