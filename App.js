import React from "react";
import ReactDOM from "react-dom/client";

const restData = [
  {
    id: 1,
    name: "Tasty Delights",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30 minutes",
    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        price: 12.99,
      },
      {
        id: 102,
        name: "Pasta Carbonara",
        price: 9.99,
      },
      {
        id: 103,
        name: "Tiramisu",
        price: 5.99,
      },
    ],
  },
  {
    id: 2,
    name: "Spicy Bites",
    cuisine: "Mexican",
    rating: 4.2,
    deliveryTime: "45 minutes",
    menu: [
      {
        id: 201,
        name: "Tacos",
        price: 8.99,
      },
      {
        id: 202,
        name: "Burrito Bowl",
        price: 10.99,
      },
      {
        id: 203,
        name: "Churros",
        price: 4.99,
      },
    ],
  },
  {
    id: 3,
    name: "Asian Fusion",
    cuisine: "Japanese",
    rating: 4.0,
    deliveryTime: "35 minutes",
    menu: [
      {
        id: 301,
        name: "Sushi Platter",
        price: 15.99,
      },
      {
        id: 302,
        name: "Ramen Noodles",
        price: 11.99,
      },
      {
        id: 303,
        name: "Matcha Ice Cream",
        price: 6.99,
      },
    ],
  },
  {
    id: 4,
    name: "Flavorful Grills",
    cuisine: "American",
    rating: 4.7,
    deliveryTime: "40 minutes",
    menu: [
      {
        id: 401,
        name: "BBQ Ribs",
        price: 14.99,
      },
      {
        id: 402,
        name: "Grilled Chicken Sandwich",
        price: 9.49,
      },
      {
        id: 403,
        name: "Cheesecake",
        price: 7.99,
      },
    ],
  },
  {
    id: 5,
    name: "Veggie Haven",
    cuisine: "Vegetarian",
    rating: 4.4,
    deliveryTime: "25 minutes",
    menu: [
      {
        id: 501,
        name: "Vegetable Stir-Fry",
        price: 10.99,
      },
      {
        id: 502,
        name: "Quinoa Salad",
        price: 8.99,
      },
      {
        id: 503,
        name: "Fruit Smoothie",
        price: 5.49,
      },
    ],
  },
  {
    id: 6,
    name: "Mediterranean Flavors",
    cuisine: "Greek",
    rating: 4.6,
    deliveryTime: "35 minutes",
    menu: [
      {
        id: 601,
        name: "Greek Salad",
        price: 9.99,
      },
      {
        id: 602,
        name: "Moussaka",
        price: 12.49,
      },
      {
        id: 603,
        name: "Baklava",
        price: 6.99,
      },
    ],
  },
];

const CardComponent = (props) => {
  const {id, name  ,rating, deliveryTime}=props.data;
  console.log(id);
  return (
    <div className="restaurant-container" key={id}>
      <div className="restaurant-card">
        <img
          alt="restMeghana"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6886efa1f87e23af38fea5ecd1c6d33c"
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
const Restaurant = () => {
  return (
    <div class='cardBody'>
    { restData.length > 0 && restData.map((item) => <CardComponent  key={item.id} data={item} />)}
    </div>
  );
};

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Please search here"
        />
        <button id="search-item-btn">Search</button>
      </div>
      {/* Restaurant Component */}
      <Restaurant restDatas={restData} />
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            alt="logo-image"
          />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* body */}
      <Body />

      {/* footer */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
