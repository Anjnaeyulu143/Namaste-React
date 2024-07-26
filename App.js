import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componenets/Header";
import Body from "./src/componenets/Body";

//React Element
const heading = <h1 className="heading">Hello World!</h1>;

/**
 * Header Component
 *  - Logo Component
 *  - Navigation Component
 * Body Component
 *  - Search Input Component
 *  - Card Container Component
 *    - Restaurant Card Component
 *      - Image
 *      - Name of Res, Star, Rating, Cuisine, delivery time
 * Footer Component
 *  - Copyright Component
 *  - Social Media Icons Links Component
 *  - Address Component
 *  - Contact Component
 */

const AppLayout = () => {
  return (
    <div className="App-Layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppLayout />
  </>
);
