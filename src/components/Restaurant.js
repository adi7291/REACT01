import CardComponent from "./CardComponent";
// //importing mock data
// import {restData} from '../utils/mockData';

const Restaurant = ({restProps}) => {
  // console.log(restProps)
    return (
      <div className='cardBody'>
       {restProps.length>0 && restProps.map((restItem=><CardComponent key={restItem.id} restItem={restItem}/>))  ||<div>No matching Restaurant Found</div>}
      </div>
    );
  };

  export default Restaurant;