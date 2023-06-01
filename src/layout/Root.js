// import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import NavComponent from './navbar';
import Home from './Home';
import { Outlet } from 'react-router-dom';
// import Footer from './footer';
import Loader from './loader';

function Root() {

  const [loading,setLoading]=useState(true)

   useEffect(()=>{
      setTimeout(() => {
         setLoading(false)
      }, 4000);
   })
    return ( 
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
<NavComponent></NavComponent>

{loading&&<Loader></Loader>} 
  {!loading&&
<Outlet></Outlet> 
  
  } 



{/* <Footer></Footer> */}


   </ThemeProvider>
     );
   
}

export default Root;