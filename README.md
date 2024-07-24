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
