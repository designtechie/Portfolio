import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import './App.css'
import Projects from "./component/Projects"
import About from "./component/About"
import Blogs from "./component/Blogs"
import Footer from "./component/Footer"
import Page from "./component/Page"




function App() {
 

  return (
   
        
    <div>
        <Navbar/>
        <Hero/>
        <Page/>
       
        <About/>
        <Blogs/>
        <Footer/>
        </div>
      )
    }
      


export default App
