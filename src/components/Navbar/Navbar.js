//rfce(react functional component export)
import "./Navbar.css"
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-container">
        <Link to="/" className="content">Home</Link>
        <Link to="/Review" className="content">Review</Link>
        <Link to="/Contact" className="content">Contact</Link>
    </div>
  )
}

export default Navbar