import { Link } from 'react-router-dom'
import './Navbar.css'



const Nav = ({ user }) => {
  return (
    <div className='siya'>
      <img className="meImg" src="siya.jpg" />
        
    <nav>
        
      <img className="backimg" src="img2.jpg" />
    
      <div className="nav-bar" >
        <Link className="link" to="/" >About</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/resume">Resume</Link>
        <div className="links">




        </div>
      </div>
      </nav>
      </div>
  )
}
export default Nav
