import '../App.css';
import cof from '../cof.png';
import cof2 from '../cof2.png'
function About() {
  return (
    <div className="About">
        <div className='con'>
            
<img src={cof}/>
<h2>Now enjoy a wonderful cafe <br/> dining experience <br/> and healthy food</h2>
<p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc vulputate libero et <br/> velit interdum, ac aliquet odio mattis.<br/><span>About it</span>  </p>
        </div>
        <img className='move' src={cof2} />
    </div>
  
  );
}

export default About;
