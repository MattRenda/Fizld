import React from 'react';
import {Navigate,Outlet,useLocation} from 'react-router-dom';

const  Protected =({user})=> {
    const location = useLocation();
    
    if (user && !user._id) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
    console.log("in Protected if")

      return <Navigate to="/" state={{ from: location }}/>;

    }
    console.log("in Protected Wrapper")
    return <Outlet/>;
  }

  export default Protected;