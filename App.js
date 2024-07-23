const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * ReactElement(Object) ==> While rendering into the HTML it inserts HTML element.. HTML(Browser Understands)
 */

/**
 * <div id="parent">
 *     <div id="child">
 *        <h1 id="h1-element">Iam an H1 element</h1>
 *        <h2 id="h2-element">Iam an H2 element</h2>
 *     </div>
 * </div>
 */

/**
 * If we want to render multiple elements inside a parent element, we can use an array as the second argument to `
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child -1" }, [
    React.createElement("h1", { id: "h1-element" }, "Iam an H1 Element"),
    React.createElement("h2", { id: "h2-element" }, "Iam an H2 Element"),
  ]),
  React.createElement("div", { id: "child -2" }, [
    React.createElement("h1", { id: "h1-element" }, "Iam an H1 Element"),
    React.createElement("h2", { id: "h2-element" }, "Iam an H2 Element"),
  ]),
]);

root.render(parent);
