import React from "react"
import Fade from "react-reveal/Fade"


const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>My projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              <a className="wp" href="https://dthomas51.github.io/WildPostV2/#articleOne"></a>
              <a className="aom" href="https://wildcodeschool.github.io/reims-js-2103-project2-age-of-memory/"></a>
              <a className="hp" href="https://github.com/WildCodeSchool/reims-js-2103-project3-personality-front"></a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
