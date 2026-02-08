import React, { useState } from "react";
import "../styles/SideNav.css";
import calendarIcon from "../assets/icons/calendarIcon.svg";
import filesIcon from "../assets/icons/filesIcon.svg";
import graphIcon from "../assets/icons/graphIcon.svg";
import inspoIcon from "../assets/icons/inspoIcon.svg";
import privacyIcon from "../assets/icons/privacyIcon.svg";
import warIcon from "../assets/icons/war.svg";  
import arrow from "../assets/arrow.svg";

function SideNav() {
    const [showFilesOptions, setShowFilesOptions] = useState(false);
    const [showInspoOptions, setShowInspoOptions] = useState(false);
  return (
    <div className="side-nav">
      <div className="item-side">
        <img src={calendarIcon} alt="Calendar" />
        <span>גאנט</span>
      </div>
      <div className="item-side">
        <img src={graphIcon} alt="Graph" />
        <span>גרף</span>
      </div>
      <div className="item-side">
        <img src={privacyIcon} alt="Privacy" />
        <span>תוכניות בטיחות</span>
      </div>

        <div className="item-side">
        <img src={warIcon} alt="Calendar" />
        <span>מורשת קרב</span>
      </div>
      <div
        className="item-side files-item"
        onMouseEnter={() => setShowFilesOptions(true)}
        onMouseLeave={() => setShowFilesOptions(false)}
      >
        <img src={filesIcon} alt="Files" />
        <span>גלריה</span>
        {showFilesOptions && (
          <div className="dropdown">
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> בא"ח 
            </div>
            <div className="dropdown-item">
            <span ><img className="arrow" src={arrow} alt="arrow"/></span> גדוד הפיקוד 
            </div>
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> מקצועות 
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;