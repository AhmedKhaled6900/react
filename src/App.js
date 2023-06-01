import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/Root";
// import Products from "./layout/products";
// import Home from "./layout/Home";
// import Login from "./layout/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [
       
    // { 
    //     path:"/",
    //     element:<Home></Home>},
       
    // { 
    //     path:"products",
    //     element:<Products></Products>},
        // {
        //   path:"login",
        //   element:<Login></Login>
        // }
    
      ],
   
    }
 
  
  ]);
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
