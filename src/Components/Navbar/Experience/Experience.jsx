import React,{useContext} from "react";
import "./Experience.css";
import { themeContext } from "../../../Context";
const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span style={{color: darkMode?'white':''}}>years</span>
        <span>Experience</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span style={{color: darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>1</div>
        <span  style={{color: darkMode?'white':''}} >Company</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
