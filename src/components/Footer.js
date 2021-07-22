import React from "react"
import Fade from "react-reveal/Fade"


const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <p>My networks</p>
            <div className="link-container">
              <a className="linkedIn-link" href="https://www.linkedin.com/in/thomas-dufour-28763b144/">
                </a>
              <a className="Github-link" href="https://github.com/DThomas51">
                </a>
            </div>
          </Fade>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
