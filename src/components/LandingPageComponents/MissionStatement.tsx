import React, { useState } from 'react'
import people from './people.png';
import './styles/MissionStatementStyle.css'

function MissionStatement(){

    const [isShown, setIsShown] = useState(false);

    return (
      <div id="missionStatementContainer">
       <div id="missionStatementSquare">
        <p id="squareText">What is 180 Degrees Consulting?</p>
        <img id="peopleImage" src={people}/>
       </div>
       <div id="missionStatementRectangle">
        <p>180 Degrees Consulting is the world's largest consultancy for non-profits & social enterprises. At Brown's chapter, we work specifically with clients in the local Providence area to give back to the people and services in our community.</p>
       </div>
      </div>
    );
  }
  
  export default MissionStatement;

  /* <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          What is 180 Degrees Consulting? 
          <img src={people} alt="people" />
        </button>
        {isShown && (
          <div>
            180 Degrees Consulting is the world's largest consultancy for non-profits & social enterprises. At Brown's chapter, we work specifically with clients in the local Providence area to give back to the people and services in our community.
          </div>
        )}
      <div id="whiteRect"></div>*/