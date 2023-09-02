import '../App.css';
import cof3 from '../cof3.png'
import cof4 from '../cof4.png'
import cof5 from '../cof5.png'
import cof6 from '../cof6.png'
import cof7 from '../cof7.png'
import cof8 from '../cof8.png'
import cof9 from '../cof9.png'
import cof10 from '../cof10.png'

function Manu() {
  return (
    <div className="Manu">
<div className='list'>
<div className='li'>
  <li>
  <img src={cof3}/>
  <div className='con1'>
  <h5>Ameriacno</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$10.00</span>
  <hr/>
  </li>
  <li><img src={cof4}/>
  <div className='con1'>
  <h5>Cappuccino</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$13.00</span>
  <hr/></li>
</div>
<div className='li'>
  <li>
  <img src={cof5}/>
  <div className='con1'>
  <h5>Latte</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$23.00</span>
  <hr/>
  </li>
  <li><img src={cof6}/>
  <div className='con1'>
  <h5>Espresso Conpana</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$3.00</span>
  <hr/></li>
</div><div className='li'>
  <li>
  <img src={cof7}/>
  <div className='con1'>
  <h5>Irish</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$15.00</span>
  <hr/>
  </li>
  <li><img src={cof8}/>
  <div className='con1'>
  <h5>Doppio</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$10.00</span>
  <hr/></li>
</div><div className='li'>
  <li>
  <img src={cof9}/>
  <div className='con1'>
  <h5>Espresso</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$20.00</span>
  <hr/>
  </li>
  <li><img src={cof10}/>
  <div className='con1'>
  <h5>Mocha</h5>
  <p>Lorem ipsum dolor sit amet,</p>
  </div>
 
  <span>$7.00</span>
  <hr/></li>
</div>
</div>
    </div>
  
  );
}

export default Manu;
