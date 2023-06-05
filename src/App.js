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
import Ceo from "./layout/uiux";
import Frontend from "./layout/frontend";
import Backend from "./layout/backend";
import Uiux from "./layout/uiux";
import Login from "./layout/login";
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
          path:"login",
          element:<Login></Login>
        },
       

        {
          path:"resources",
          element:<Resources></Resources>,

          children:[
{

  path:"experts",
  element:<Experts></Experts>,

  children:[
    {
      path:"uiux",
      element:<Uiux></Uiux>
    },
    {
      path:"frontend",
      element:<Frontend></Frontend>
    },
    {
      path:"backend",
      element:<Backend></Backend>
    }
  ]
},





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
