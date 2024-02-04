import CardComponent from "./CardComponent";
// //importing mock data
// import {restData} from '../utils/mockData';

const Restaurant = ({restDatas}) => {
  
    return (
      <div className='cardBody'>
      { restDatas.map((item) => <CardComponent  key={item.id} data={item} />)}
      </div>
    );
  };

  export default Restaurant;