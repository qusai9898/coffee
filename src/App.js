import './App.css';
import Home from './components/home';
import About from './components/About';
import Manu from './components/Manu';
import Ex from './components/EX';
import cofc from './cofc.png';
import UncontrolledExample from './components/client';
import CardCarousel from './components/cardsli';
import Slidit from './components/slidit';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Manu/>
     <Ex/>
     <img className='cofc' src={cofc}/>
<CardCarousel/>
<Slidit/>
    </div>
  );
}

export default App;
