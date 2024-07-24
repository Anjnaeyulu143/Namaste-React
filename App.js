import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 className="heading">Hello World!</h1>;

//React Component
const Heading = () => {
  return <h1>This is my Functional Component!</h1>;
};

const Title = () => <h1 className="title">Title</h1>;

const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading"> This is Heading!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Title />
    <HeadingComponent />
  </>
);
