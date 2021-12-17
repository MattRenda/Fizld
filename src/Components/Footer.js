import React, { Component } from 'react'

class Footer extends Component {

    render() {
        const year = new Date();
        return (
            <footer>
                <div style={{display:'flex', justifyContent:'center'}} className='footer-bgColor dark-blue'>
                    <div style={{alignSelf:'end'}} className='footer-txtCenter'> Copyright &copy; {year.getFullYear()}, MatthewJRenda</div>
                </div>
            </footer>
        )
    }
}

export default Footer;