import React from "react"
import Fade from "react-reveal/Fade"


const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
            Front-end developer
            </p>
          </div>
          <div className="wrapper">
            <div className="me"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis neque ut varius consectetur. 
              In dapibus vestibulum elit ut suscipit. Sed sed enim semper, 
              volutpat sapien eget, volutpat ipsum. 
              Aliquam scelerisque, magna eu fringilla bibendum, 
              libero odio posuere felis, at sodales eros dolor non felis. 
              Praesent tristique vestibulum massa hendrerit commodo. 
              Pellentesque eleifend sem neque, sed interdum augue fermentum et. 
              Duis quis est vitae quam suscipit convallis eget id dolor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
