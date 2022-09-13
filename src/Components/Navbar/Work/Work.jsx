import React,{useContext} from "react";
import "./Work.css";

import Html from "../../../img/html.png";
import Reactjs from "../../../img/react.png";
import Css from "../../../img/css.png";
import javascript from "../../../img/javascript.png";
import node from "../../../img/nodejs.png";
import { motion } from "framer-motion";
import { themeContext } from "../../../Context";
const Work = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type: 'spring'}
  return (
    <div className='works'>
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>Mainly focused on these</span>
        <span>Skills</span>
        <span>
        I 'm mainly focuesd on working on Web and Mobile development which includes HTML5 CSS3 Bootstrap React React Native.
        My further aim is to become a full stack developer. Learning nodejs for backend.
        </span>

        <button className='button s-button'>Hire Me</button>

        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side */}
      <div className='w-right'>
        <motion.div
           initial={{ rotate: 60 }}
           whileInView={{ rotate: 0 }}
           viewport={{ margin: "-60px" }}
      
           transition={{ duration: 3.5, type: "spring" }}
         className='w-mainCircle'>
          <div className='w-secCircle'>
            <img src={Html} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Css} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={node} alt='' />
          </div>

          <div className='w-secCircle'>
            <img src={javascript} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Reactjs} alt='' />
          </div>
        </motion.div>
        <div className='w-backCircle redCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  );
};

export default Work;
