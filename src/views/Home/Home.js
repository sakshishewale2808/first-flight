import Navbar from "./../../components/Navbar/Navbar"
import Button from "./../../components/Button/Button"
import Footer from "./../../components/Footer/Footer"

const Home = ()=>{
    return(
       <>
       <Navbar/>
      
       <h1>Home Page</h1>
       <Button text="At Home"/>
       <Footer text=" This is Home page footer"/>
       
       </>
    )
 }
 export default Home