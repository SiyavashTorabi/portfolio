import { Link } from 'react-router-dom'
import './Navbar.css'



const Nav = ({ user }) => {
  return (
    <div className='meImg'>
      <img className="bg" src="info.jpg" alt=""  />
      <img className="img" src="siya.jpg" alt="" />
      <div>
    <nav>
      <div className="nav-bar" >
        <Link className="link" to="/" >About</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/resume">Resume</Link>
        <div className="links">
        </div>
      </div>
        </nav>
        </div>
      </div>
  )
}
export default Nav
