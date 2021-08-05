import { Link } from 'react-router-dom'




const Nav = ({ user }) => {
  return (
    <nav>
      
      <div className="nav-bar" >

        <Link className="link-A" to="/" >About</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/resume">Resume</Link>
        <div className="links">




        </div>
      </div>
    </nav>
  )
}
export default Nav
