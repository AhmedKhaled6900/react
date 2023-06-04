import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./layout/Home";
import Root from "./layout/Root";
import Products from "./layout/products";
import Loader from "./layout/loader";
import Resources from "./layout/resources";
import Experts from "./layout/experts";
// import Products from "./layout/products";
// import Home from "./layout/Home";
// import Login from "./layout/login";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,

      children: [
       
    { 
        path:"/",
        element:         <Home></Home>,
  
      },
       
    { 
        path:"products",
        element:<Products></Products>},
       

        {
          path:"resources",
          element:<Resources></Resources>,

          children:[
{

  path:"experts",
  element:<Experts></Experts>
}


          ]
        }
      ],
   
    }
 
  
  ]);
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
