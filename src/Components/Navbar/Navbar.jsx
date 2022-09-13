import React,{useContext} from "react";
import "./Navbar.css";
import Toggle from "./Toggle/Toggle";
import {Link} from 'react-scroll'
import { themeContext } from "../../Context";
import HH from '../../img/HH.png'
function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name' style={{ color: darkMode ? "white" : "" }}><img src={HH} width={150} height={150} /></div>
    <Toggle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: "none" }}  >
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
               <li style={{ color: darkMode ? "white" : "" }}>Home</li>
                </Link>
            <Link spy={true} to='Services' smooth={true} activeClass='activeClass' > 
             <li style={{ color: darkMode ? "white" : "" }}>Services</li>
              </Link>
            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass' >  
            <li style={{ color: darkMode ? "white" : "" }} >Experience</li>
             </Link>
            <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass' >   
              <li style={{ color: darkMode ? "white" : "" }}>Portfolio</li> 
              </Link>
   
           
          
          


          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' >   
        <button className='button n-button'>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
