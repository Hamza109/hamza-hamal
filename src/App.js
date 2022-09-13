import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Navbar/intro/Intro";
import Skills from "./Components/Navbar/Skills/Skills";
import Experience from "./Components/Navbar/Experience/Experience";
import Work from "./Components/Navbar/Work/Work";
import Portfolio from "./Components/Navbar/Portfolio/Portfolio";
import Contact from "./Components/Navbar/Contact/Contact";
import Footer from '../src/Components/Navbar/Footer/Footer'
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className='App'
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
