import React, { Component } from 'react'

class Footer extends Component {

    render() {
        const year = new Date();
        return (
            <footer class="pt-4 my-md-5 pt-md-5 border-top container">
            <div class="row justify-content-md-center">
              <div class="col col-4 col-lg offset-md-2">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Cool stuff</a></li>
                  <li><a class="text-muted" href="#">Random feature</a></li>
                  <li><a class="text-muted" href="#">Team feature</a></li>
                  <li><a class="text-muted" href="#">Stuff for developers</a></li>
                  <li><a class="text-muted" href="#">Another one</a></li>
                  <li><a class="text-muted" href="#">Last time</a></li>
                </ul>
              </div>
              <div class="col col-4 col-lg">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Resource</a></li>
                  <li><a class="text-muted" href="#">Resource name</a></li>
                  <li><a class="text-muted" href="#">Another resource</a></li>
                  <li><a class="text-muted" href="#">Final resource</a></li>
                </ul>
              </div>
              <div class="col col-4 col-lg">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Team</a></li>
                  <li><a class="text-muted" href="#">Locations</a></li>
                  <li><a class="text-muted" href="#">Privacy</a></li>
                  <li><a class="text-muted" href="#">Terms</a></li>
                </ul>
              </div>
            </div>
            <div class="text-center">
                <small>Copyright &copy; {year.getFullYear()}, MatthewJRenda</small>
              </div>
          </footer>
        )
    }
}

export default Footer;