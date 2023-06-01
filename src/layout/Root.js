// import Container from 'react-bootstrap/Container';

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import NavComponent from './navbar';
// import Home from './Home';
import { Outlet } from 'react-router-dom';
// import Footer from './footer';

function Root() {
    return ( 
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
<NavComponent></NavComponent>



<Outlet></Outlet> 

{/* <Footer></Footer> */}


   </ThemeProvider>
     );
   
}

export default Root;