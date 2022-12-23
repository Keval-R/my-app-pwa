import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import { useReactPWAInstall } from "react-pwa-install";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "Install Web App",
      logo: logo,
      features: (
        <ul>
          <li>Cool feature 1</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };

  return (
    <>
     {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      )}
    <RouterProvider router={router} />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
