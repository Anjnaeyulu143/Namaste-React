# Namaste React

- Episode -01
- Episode -02

# Episode -01

- React.createElement => JS Object => HTMLElement(render)

# Episode -02 -> Igniting Our App (Learnings)

- Package.json file is the configuration of the npm, and the tracks the version of the dev-dependcies and normal dependcies.
- Package.lock.json file it tracks the entire version and some depth information about the packages.
- Two kinds of dependcies
- 1.  Dev-Dependcies -> These are used for the development purpose.
- 2.  Normal Dependcies -> These are used in production.
- Bundlers are most important packages in the react (Bable, Parcel).
- How to install dependcies ?
- npm install -D <PACKAGE_NAME>
- npm vs npx
- npm is used to install and uninstall packages.
- npx is used to execute installed packages.
- CDN links are not good way to bring react into our app.
- !IMP imports are not normal in JS. So we need to use type="module" in script tag.
- Which are easily regenerated those files don't need push into git.
- .gitignore -> we put the files which we don't want push into git.
- dist and .parcel-cache are created by parcel package, When we run the command npm parcel index.html
- dist file -> Is contains all compressed code, That code is render on the browser.

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of Our files
- Bundling
- Compressing
- Consistency Hashing
- Code Splitting
- Differential Bundling - Support Older Browesers
- Error Handling
- HTTPs
- Diagnostics
- Tree Shaking -> remove unused code for you...
- Different dev and prod bundles

# Episode -03 -> Laying the foundation (Learnings)

- Use Scripts to run/build the project..
- npm run start => npm parcel index.html..
- React and JSX both are different..
- JSX is a Convention merge to both HTML and JS..
- JSX is different than HTML..
- JSX is not HTML. JSX is HTML like syntax..
- JSX, HTML and React. These three are different..
- First write code for developers..
- Code is humans first, then it for Machine...
- Js Engine is not understand JSX..
- Js Engine is understand ES6 and valid pure javaScript..
- JSX (transpiled before it reaches the JS Engine) - It is done by Parcel -> It gives this conversion responsibility to (BABLE) Package...

- BABLE is a js complier..
- JSX =>(BABLE Complies) React.createElement => ReactElement.JS Object => HTMLElement(render)
- BABLE is Converting JSX to React.createElement..
- BABLE is piece of JS of code..
- CamelCase Notion is used in attributes in JSX..
- If the JSX is multiple lines, We have to wrap it inside into round ()..

- React Component -> Two types of Component.
- 1.  Class Based Component -> is the old of writing code, and nobody uses now.
- 2.  Functional Component -> the new way of writing code, most of the coders uses functional component..

- React Functional Component is just a normal javascript function, and it returns piece of JSX code..

- React Component Name always started capital letter, Otherwise we get a error..
- To render React Element, We use root.render(header)
- To render React Component, We use root.render(<header/>)
- Composing different components into single component is known as the Component Composition..
- We can insert any js expression inside the component by using {expression name} -> const expression (name) = 1000
- React Element -> const heading = (<h1>React Element<h1/>)
- React Component -> const Heading = () => <h1>React Component</h1>..

- JSX will prevent from cross-script-site attacks..
- <Title/>, <Title></Title> and {Title}. These three things are same.. We can use any one of them, But best practice is using <Title/>
- JSX is making much more readable then React..

# Episode -04 -> Talk is cheap, Show the code (Learnings)

- In react props are used send data to the component
- Props are just normal arguments to the function..
- Passing a props to a component is just like a passing argument to the normal function..
- React all props are wrap into the single object known as props object..
- When we want to dynamically pass data to the component we need to pass it through the props..

- finally, destructure that props object and use in the component.
- Config driven UI -> Controlling UI based on the backend data.
- UI Layer and Data Layer both are important..
- When sending object as the prop resData = {objName} key will go as the prop inside the component
- Array.join() is used to split elements based on the separator..
- What is Optional Chaining ?
- Whenever we are lopping we need to give a key to the the component.
- By assigning unique key to the react component while mapping we are optimizing the rendering speed.
- Never use index as the key.
- not using keys (not acceptable) -> use index -> far better using unique id as key.

# Episode -05 -> Let's get hooked (Learnings)

- !Make a separate file for the every react component.
- !Never ever store hardcoded data and url in the component files.
- ! Create UTILS file store all common files in that file.

- There are two types of export and import
- 1. Default Export and Import. -> It only exports only one thing.
- 2. Named Export and Import. -> If we want to export multiple things then we use Named Export..

- How to export default export -> End of the file write this expression (export default fileName)

- How to export Named export -> Beginning of the variable use export keyword -> export const a = 10
- In utils use Capital Snake Case Conversion.
- Import {NameExport} filepath.
- React is Fast in DOM manipulation -> Data Changes then automatically changes DOM..

# React Hooks

- Normal JS utility Function.
- State Variable is a -> Super Powerful Variable...
- To create React Variable we need to use React Hooks.
- Hook is just a normal function, but has some extra power and written logic behind it..

- Two very important Functions
- 1. UseState() -> Super Powerful State Variables -> Used to create state variable inside React known as the react variable.
- 2. UseEffect()
- Utility Functions are Local State Variable.
- Utility Functions -> React Hooks syncs UI with the data layer.
- Whenever React state variable changes, React is re rendering the component.
- React will make DOM operations super fast.
- Virtual DOM Manipulation -> React uses Reconciliation which is also known as the React Fiber.
- React Elements are Normal Objects -> Virtual DOM stores these Normal Objects.
- Virtual DOM is representation of the the Actual DOM.
- Diff Algorithm Compares the difference between the NEW DOM with the OLD DOM.
- Finding the difference between the two HTML is tough, Finding the difference between the two is fast.
- React does'nt touch the Actual DOM a lot.
- Incremental Rendering is uses the React while rendering the Virtual DOM..
- React is Fast, Because react is doing efficient DOM manipulation.
- Set Function -> Whenever we trigger the set function the diff algorithm is triggered and updated the UI.
- Set Function is returns the arr.
