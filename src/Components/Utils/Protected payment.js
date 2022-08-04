import React from 'react';
import {Navigate,useLocation} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from '../Redux/selectors';

const  Protected = ({children})=> {
    const location = useLocation();
    
    function getCookie(name) {
      var cookieArr = document.cookie.split(";");
      for(var i = 0; i < cookieArr.length; i++) {
          var cookiePair = cookieArr[i].split("=");
          if(name === cookiePair[0].trim()) {
              return decodeURIComponent(cookiePair[1]);
          }
      }
      return null;
    }

    if (!getCookie("ms_id")) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/Login" state={{ from: location }} replace/>;
    }
    return children;
  }

  const mapStateToProps =createStructuredSelector({
    user: selectors.getUser(),
  })

const withRedux = connect(mapStateToProps, null)(Protected);
export default withRedux;