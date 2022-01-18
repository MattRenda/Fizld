import React from 'react'
import ContactPage from './ContactPage';
const Footer = () => {

  const year = new Date();
  return (
    <div style={{ position: 'relative' }} className='off-white pb-5'>
      <ContactPage title={'Need to contact me?'} />
      <footer className="pt-4 my-md-5 pt-md-5 border-top container">
        <div className="row justify-content-md-center">
          <div className="col col-4 col-lg offset-md-2">
            <h3>Features</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Cool stuff</a></li>
              <li><a style={{color:'black'}} href="/">Random feature</a></li>
              <li><a style={{color:'black'}} href="/">Team feature</a></li>
              <li><a style={{color:'black'}} href="/">Stuff for developers</a></li>
              <li><a style={{color:'black'}} href="/">Another one</a></li>
              <li><a style={{color:'black'}} href="/">Last time</a></li>
            </ul>
          </div>
          <div className="col col-4 col-lg">
            <h3>Resources</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Resource</a></li>
              <li><a style={{color:'black'}} href="/">Resource name</a></li>
              <li><a style={{color:'black'}} href="/">Another resource</a></li>
              <li><a style={{color:'black'}} href="/">Final resource</a></li>
            </ul>
          </div>
          <div className="col col-4 col-lg">
            <h3>About</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Team</a></li>
              <li><a style={{color:'black'}} href="/">Locations</a></li>
              <li><a style={{color:'black'}} href="/">Privacy</a></li>
              <li><a style={{color:'black'}} href="/">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <small>Copyright &copy; {year.getFullYear()}, MatthewJRenda</small>
        </div>
      </footer>          
      </div>

  )
}

export default Footer;