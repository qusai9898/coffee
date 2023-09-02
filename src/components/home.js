import '../App.css';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="Home">
   <Navbar/>
   <div className='text'>
<h1>Rosted Coffee<br/>
For You</h1>
<p>The coffee is brewed by first roasting the green coffee <br/>
coals in a brazier. given an opportunity to sample.</p>
<Button className='o'>TESTY COFFEE</Button>
<Button className='t'>READ MORE</Button>

   </div>
    </div>
  
  );
}

export default Home;
