import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects">
      <div className="project1">
        <h2 className="texts">SCP-APP</h2>
        <a className="links" href="https://lucid-wiles-f50192.netlify.app/" rel="noreferrer" target="_blank">deployed site</a>
        <a className="links" href="https://github.com/SiyavashTorabi/scp-app" rel="noreferrer" target="_blank">App On Github</a>

        <h3 className="texts">FE Only</h3>
        <ul className="texts"> 
        Languages/Apps used creating this Project:
        <li>React</li>
        <li>-------</li>
        <li>Netlify</li>
        <li>WireFrame</li>
        <li>Air Table</li>
        </ul>
        <img className="proImg" src='SCP.jpg' alt='img'/>
    </div>
      <div className="project2">
        <h2 className="texts">Aqua Hunters</h2>
        
        <a className="links" href="https://61012b87a5da71b8ffa6a634--aqua-hunters.netlify.app/" rel="noreferrer" target="_blank">deployed site</a>
        <a className="links" href="https://github.com/SiyavashTorabi/Aqua-Hunters" rel="noreferrer" target="_blank">App On Github</a>
        <h3 className="texts">Full Stack</h3>
        <ul className="texts"> 
        Languages/Apps used creating this Project:
        <li>React</li>
        <li>Ruby</li>
        <li>Rails</li>
        <li>-------</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Figma</li>
        </ul>
        <img className="proImg" src='Fish.jpg' alt='img'/>
    </div>
      <div className="project3">
        <h2 className="texts">PCParts</h2>
        <a className="links" href="https://siyas-pcparts.netlify.app/" rel="noreferrer" target="_blank">deployed site</a>
        <a className="links" href="https://github.com/SiyavashTorabi/PCParts" rel="noreferrer" target="_blank">App On Github</a>
        <h3 className="texts">Full Stack</h3>
        <ul className="texts"> 
        Languages/Apps used creating this Project:
        <li>React</li>
        <li>JS</li>
        <li>Express</li>
        <li>-------</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Figma</li>
        </ul>
        <img className="proImg" src='pc.jpg' alt='img'/>
    </div>
      <div className="project4">
        <h2 className="texts">lolinfo</h2>
        <a className="links" href="https://siyavashtorabi.github.io/lolinfo/" rel="noreferrer" target="_blank">deployed site</a>
        <a className="links" href="https://github.com/SiyavashTorabi/lolinfo" rel="noreferrer" target="_blank">App On Github</a>
        <h3 className="texts">FE Only</h3>
        <ul className="texts"> 
        Languages/Apps used creating this Project:
        <li>HTML</li>
        <li>JS</li>
        <li>CSS</li>
        <li>-------</li>
        <li>Netlify</li>
        <li>Figma</li>
        </ul>
        <img className="proImg" src='lol.jpg' alt='img' />
    </div>

      

    </div>
  )
}
