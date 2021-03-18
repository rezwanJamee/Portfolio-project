import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Banner from './components/AvailabilityBanner';

function App() {
  return (
    <>
    <Particles 
    className = "particles-canvas"
      params={{
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Banner />
    <Experience />
    <Portfolio />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;
