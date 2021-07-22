import React from "react"
import Fade from "react-reveal/Fade"
import Html from "../icones/html.png"
import Css from "../icones/css.png"
import Js from "../icones/js.png"
import Reacts from "../icones/react.png"
import Reactn from "../icones/react-native.png"
import Office from "../icones/office.png"
import Ps from "../icones/PS.png"
import Ai from "../icones/Ai.png"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skill-container">
          <Fade bottom cascade>
            <h1>My abilities</h1>
          </Fade>
         <div className="grids">
           <div className="flex-skills">
             <img className="images" src={Html} alt=""/>
             <p>HTML</p>
           </div>
           <div className="flex-skills">
             <img  className="images" src={Css} alt=""/>
             <p>Css</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Js} alt=""/>
             <p>Javascript</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Reacts} alt=""/>
             <p>React</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Reactn} alt=""/>
             <p>React-native</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Office} alt=""/>
             <p>Office</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Ps} alt=""/>
             <p>Photoshop</p>
           </div>
           <div className="flex-skills">
             <img className="images" src={Ai} alt=""/>
             <p>Illustrator</p>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
