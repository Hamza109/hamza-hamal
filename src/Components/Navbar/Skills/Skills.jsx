import React,{useContext} from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../../img/heartemoji.png";
import Glasses from "../../../img/glasses.png";
import Humble from "../../../img/humble.png";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";
import { themeContext } from "../../../Context";

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type: 'spring'}
  return (
    <div className='skills' id='Services'>
      {/* left side */}
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }} >My Awesome</span>
        <span>Skills</span>
        <span>
        Passionate Web and Mobile Developer with  nearly 2 years of experience. Equipped with diverse and promising skill set. Proficient in an assortment of technologies including C, C++,HTML, CSS, JavaScript, React and React Native.  Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>

        <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className='cards'>
        <motion.div 
         initial={{ left: "25rem" }}
         whileInView={{ left: "14rem" }}
         transition={transition}
        style={{ left: "14rem" }}>
          <Card emoji={HeartEmoji} heading='React' detail='React developer' />
        </motion.div>
        <motion.div 
         initial={{ left: "-11rem", top: "12rem" }}
         whileInView={{ left: "-4rem" }}
         transition={transition}
        style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading='React Native'
            detail='React Native developer'
          />
        </motion.div>
        <motion.div   initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading='Javascript'
            detail='Javascript developer'
          />
        </motion.div>
        <div
          className='blur s-blur2'
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;
