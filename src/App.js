
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Events from './components/Events';
import About from './components/About';
import Contacts from './components/Contacts';
import Contributors from './components/Contributors';
import Team from './components/Team';
import { useRef } from 'react';



function App() {

  // const Home = useRef(null);
  // const About = useRef(null);
  // const Events = useRef(null);


  // const scrollToSection = (elementref) => 
  //     window.scrollTo({top: elementref.current.offsetTop,
  //     behavior: "smooth"  
  //     });

  return (
    <>
      <Navbar />

      <div className="Container">
        <div className="target" id="target1">
          <Home />
        </div>

        <div className="target" id="target2">
          <h1 >About Us</h1>
          <About/>
        </div>

        <div className="target" id="target3">
          
          {/* <h1>Events</h1> */}
          <Events/>
        </div>

        <div className="target" id="target4">
          {/* <h1>Teams</h1> */}
          {/* <Team /> */}
        </div>

        <div className="target" id="target5">
          {/* <h1>Contacts</h1> */}
          <Contacts />
        </div>

        <div className="target" id="target6">
          <h1>Blog</h1>
        </div>

        <div className="target" id="target7">
          {/* <h1>Contributors</h1> */}
          <Contributors />
        </div>
      </div>
    </>
  );
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(App)
