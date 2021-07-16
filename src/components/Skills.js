// import {  } from '@material-ui/icons';
import React from 'react'
import reactjs from "../skills/reactjs.png"
import html from "../skills/html.png"
import css from "../skills/css.png"
import js from "../skills/js.png"
import node from "../skills/node.jpg"
import cs from "../skills/cs.png"
import java from "../skills/java.jpg"
import php from "../skills/php.png"
import python from "../skills/python.png"
import flutter from "../skills/flutter_intro.png"
import asp from "../skills/asp.png"

export const Skills = () => {
    return (
        <div id="skills" className="skill-wraper">
            <div className="info">
                <h1 className="title">Skills</h1>
                {/* <img className="pic" src={pic} alt="pic.."/> */}
                <div className="skills-container">
                    <div className="skill-box">
                        <div className="img">
                            <img src={reactjs} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">React Js</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={node} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">Node Js</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={html} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">HTML 5</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={css} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">CSS 3</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={js} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">JavaScript</h3>
                    </div>
                    
                    <div className="skill-box">
                        <div className="img">
                            <img src={cs} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">C#</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={java} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">Java</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={php} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">PHP</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={python} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">Python</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={flutter} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">Flutter</h3>
                    </div>
                    <div className="skill-box">
                        <div className="img">
                            <img src={asp} className="skill-img"/>
                        </div>
                        <h3 className="skill-name">Asp.Net</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;