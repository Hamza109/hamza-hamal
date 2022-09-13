import React from "react";
import "./Footer.css";
import Wave from "../../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import hamza from '../../../img/hamza.jpeg'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt='' style={{ width: "100%" }} />
      <div className='f-content'>
        <span>hamalhamza@gmail.com</span>
        <div className='f-icons'>
          <a href='https://www.instagram.com/hamalhamza1/'>
            <Insta color='white' size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/hamza-hamal/'>
            <Linkedin color='white' size={"3rem"} />
          </a>

          <a href='https://github.com/Hamza109/Hamza109'>
            <Gitub color='white' size={"3rem"} />
          </a>
   
        </div>
        <img src={hamza} width={150} height={150} />
      </div>
    </div>
  );
};

export default Footer;
