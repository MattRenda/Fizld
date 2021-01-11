import React,{Component} from 'react'
import Header from './Header'
import RecentWork from './RecentWork'
import Footer from './Footer'
import About from './About'
import Intro from './intro'
import '../index.css'
import '../Style/style.css'

class App extends Component{

   
    render(){
       
        return(
            <>
            <Header/>
            <Intro/>
            <About/>
            <RecentWork/>
            <Footer/>
            </>
        )
    }
}

export default App;