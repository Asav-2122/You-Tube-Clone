import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Header/Navbar";
import store from "./Store/store"
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Watchpage from "./components/Watchpage";
import Maincontainer from "./components/Maincontainer";


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<Watchpage/>
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
   
      <Navbar/>
      {/* <Body/> */}
      <RouterProvider router={appRouter}/>

      
    
    </Provider>
  );
};

export default App;
