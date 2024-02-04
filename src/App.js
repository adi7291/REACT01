import React from "react";
import ReactDOM from "react-dom/client";

//importing components
import Header from './components/Header';
import Body from "./components/Body";




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
