import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TopNav.css"; 
import bhd14logo from "../assets/bhd14logo.svg"; 
import h607logo from "../assets/topnav/607.svg";
import peleLogo from "../assets/pelelogo.svg";
import bhd14Graphic from "../assets/Graphicbhd14.svg";
import lishkaImg from "../assets/topnav/lishca1.svg";


function TopNav({ onNavigate, activePage }) {
    const navigate = useNavigate();

    const handlePeleClick = () => {
      navigate("/pelesite"); // Navigate to the PeleSite page
    };
    
    return (
      <>
        <img
          src={peleLogo}
          alt="Pele Logo"
          className="peleLogo"
          onClick={handlePeleClick}
          style={{ cursor: "pointer" }}
        />
        <div className="top-nav">
          <div
            className={`item ${activePage === "bach" ? "active" : ""}`}
            onClick={() => onNavigate("bach")}
          >
לשכה
          </div>
          <div
            className={`item ${activePage === "gdodha" ? "active" : ""}`}
            onClick={() => onNavigate("gdodha")}
          >
פלס"ם          </div>
          <div
            className={`bhd14 ${activePage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >    
                  <img
        src={h607logo}
        alt="bhd14Graphic"
        className="bhd14Graphic" 
      />    </div>
          <div
            className={`item ${activePage === "miktzot" ? "active" : ""}`}
            onClick={() => onNavigate("miktzot")}
          >
            פלוגות לוחמות
          </div>
          <div
            className={`item ${activePage === "mifkada" ? "active" : ""}`}
            onClick={() => onNavigate("mifkada")}
          >
            אג"ם
          </div>
        </div>
        <img src={bhd14logo} alt="bhd14logo" className="bhd14logo" />
      </>
    );
}

export default TopNav;