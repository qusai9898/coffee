import cof11 from '../cof11.png'
import cof12 from '../cof12.png'
import ex from '../ex.png'
function Ex() {
  return (
    <div className="Ex">
  <div className="con3">
    <img className='head' src={ex}/><br/>
<div className="coff">
<img src={cof11}/>
<h4>Ameriacno</h4>
<p>Lorem ipsum dolor sit amet,<br/> margin and padding. </p>
<span>JUST $19.00</span>
</div>
<div className="coff">
<img className='sp' src={cof12}/>
<h4>Ameriacno</h4>
<p>Lorem ipsum dolor sit amet,<br/> margin and padding. </p>
<span>JUST $19.00</span>
</div>
<div className="coff">
<img src={cof11}/>
<h4>Ameriacno</h4>
<p>Lorem ipsum dolor sit amet,<br/> margin and padding. </p>
<span>JUST $19.00</span>
</div>
  </div>
    </div>
  );
}

export default Ex;
