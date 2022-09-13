import React,{useContext} from "react";
import "./Intro.css";

import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import boy from "../../../img/boy.png";
import Crown from "../../../img/crown.png";
import mobile from "../../../img/mobile.png";
import thumbup from "../../../img/thumbup.png";
import glassesimoji from "../../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../../Context";
import { AnimatePresence,motion } from 'framer-motion'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 2, type: 'spring'}
 

  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Hamza Hamal</span>
          <span>
            Frontend Developer with a good experience in web designing, mobile
            designing and development, producing the Quality work.
          </span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
        <a href='https://www.instagram.com/hamalhamza1/'>
            <Insta color='#fa5252' size={"6rem"} />
          </a>
          <a href='https://www.linkedin.com/in/hamza-hamal/'>
            <Linkedin color='#fa5252' size={"6rem"} />
          </a>

          <a href='https://github.com/Hamza109/Hamza109'>
            <Gitub color='#fa5252' size={"6rem"} />
          </a>
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='vector1' />
        <img src={Vector2} alt='vector2' />
        <img src={boy} alt='boy' />
        <motion.img
        initial={{left:'-36%'}} 
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt='' />
        <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
         style={{ top: "-4%", left: "44%" }}>
          <FloatingDiv className='floating-div' image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div 
         initial={{ left: "9rem", top: "18rem" }}
         whileInView={{ left: "0rem" }}
         transition={transition}
        style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv className='floating-div' image={mobile} txt1='Mobile' txt2='Developer' />
        </motion.div>
        {/*blur div */}
        <div className='blur' style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className='blur'
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
