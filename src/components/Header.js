import React from "react"
import Fade from "react-reveal/Fade"


const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm Thomas {" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
              Building digital
              </h1>
              <h1>
                {" "}
                products!
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p></p>
          </Fade>
          <Fade bottom>
            <a className="mail" href="mailto:thomas.dufour974@gmail.com">
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
