import React, { useEffect, useCallback, useState } from "react";
import "./cards.css";
import pic1 from '../Frame.png';
import im from "../im.png";
import im1 from "../im1.png";
import im2 from "../im2.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [

  {
    id: 2,
    title: "Second Item",
    pic:im,
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "A Third Card",
    pic:im1,
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla."
  },
  {
    id: 4,
    title: "Fourth",
    pic:im2,
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="cards">
      <ul className="card-carousel">
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
          >
           <h1>“ </h1>
            <p>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <img src={card.pic}/>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
