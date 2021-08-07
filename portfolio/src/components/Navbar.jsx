import { Link } from 'react-router-dom'
import './Navbar.css'



const Nav = ({ user }) => {
  return (
    <div className='meImg'>
      <img className="bg" src="https://thumbs-prod.si-cdn.com/zwOzXtZnnwCaVDxKFIg6N-QNAiU=/fit-in/1600x0/https://public-media.si-cdn.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg" alt=""  />
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
