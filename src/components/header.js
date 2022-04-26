import * as React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render(){
    return (
      <nav>
        <ul>
            <li><a className="logo"><span className="material-icons inline-icon">devices</span> Oscar Piña</a></li>
            <li><Link to="/" className="hvr-underline-from-center">Home</Link></li>
            <li><Link to="/" className="hvr-underline-from-center">Skills</Link></li>
            <li><Link to="/" className="hvr-underline-from-center">Projects</Link></li>

            <li><button id="toggle-nav"></button></li>
        </ul>
    </nav>
    )
  }
};


export default Header
