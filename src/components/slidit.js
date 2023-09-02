import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../App.css"
import cardim from "../card.png"
import card2 from "../card2.png"
import card3 from "../card3.png"

import L4 from "../L4.png"
export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
<div className="keen-slider__slide number-slide2"><img src={cardim}/>
      <div className="side">
      <img className="i5" src={L4}/>
      <h5>coffee & pastry</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, </p>
      </div>
      
      </div>
            <div className="keen-slider__slide number-slide2"><img src={card2}/>
      <div className="side">
      <img className="i5" src={L4}/>
      <h5>bean varieties</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, </p>
      </div>
      
      </div>
      <div className="keen-slider__slide number-slide2"><img src={card3}/>
      <div className="side">
      <img className="i5" src={L4}/>
      <h5>coffee to go</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, </p>
      </div>
      
      </div>    
      <div className="keen-slider__slide number-slide2"><img src={cardim}/>
      <div className="side">
      <img className="i5" src={L4}/>
      <h5>coffee & pastry</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, </p>
      </div>
      
      </div>    
    </div>
  )
}
