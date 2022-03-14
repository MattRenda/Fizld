import React from 'react'
import ContactPage from './ContactPage';
const Footer = ({contact}) => {

  const year = new Date();
  return (
    <div style={{ position: 'relative' }} className='off-white pb-5'>
     <div hidden={!contact}><ContactPage title={'Need to contact us?'} /></div> 
      <footer className="pt-4 my-md-5 pt-md-5 border-top container">
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
          <div >
            <h3>Features</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Web development</a></li>
              <li><a style={{color:'black'}} href="/">Web design</a></li>
              <li><a style={{color:'black'}} href="/">Web hosting</a></li>
              <li><a style={{color:'black'}} href="/">Support</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Contact us</a></li>
              <li><a style={{color:'black'}} href="/">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul className="list-unstyled text-small">
              <li><a style={{color:'black'}} href="/">Team</a></li>
              <li><a style={{color:'black'}} href="/">Privacy</a></li>
              <li><a style={{color:'black'}} href="/">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <small>Copyright &copy; {year.getFullYear()} Fizld.com</small>
        </div>
      </footer>          
      </div>

  )
}

export default Footer;