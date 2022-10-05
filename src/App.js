import './App.css';
import LeftBar from './Components/LeftBar';
import Nav from './Components/Nav';
import RightBar from './Components/RightBar';
import Routing from './Components/Routing';

function App() {
  return (
    <div className="App">

      <video autoPlay muted loop id="background-video">
        <source src="backclouds.mp4" type="video/mp4" />
      </video>

      <Nav />

      <br></br>

      <div id="main-section">
        <LeftBar/>
        <Routing></Routing>
        <RightBar/>
      </div>


      <div id="help-section">
        <br></br>
        <h1>Color Coding</h1>
        <p className='start'>This is the start of a new level!</p>
        <p className='useless'>This route is worthless. You don't need to return here.</p>
        <p className='trivial'>This route isn't useless, but you don't need to do anything special.</p>
        <p className='action'>This route is critical to advancing. Time to use your coding skills!</p>
        <p className='congrats'>This route marks the end of a level. On to the next!</p>
      </div>
    </div>
  );
}

export default App;
