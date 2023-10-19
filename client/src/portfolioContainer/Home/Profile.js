import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icon">
            <a href="https://www.facebook.com/wasifdaliali">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/wasif_aliali">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/wasif-dali">
              <i className="fa fa-github-square"></i>
            </a>

            <a href="https://twitter.com/wasifk991">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
            </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello,I'M <span className="highlighted-text">Wasif Ali</span>
            </span>
          </div>
        <div className='profile-details-role'>
          <span className='primary-text'>
            <h1>
                  {""}
                  <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev🔴",
                    1000,
                    "Full Stack Developer💻",
                    
                    1000,
                    "MERN Stack Dev🤓",
                    
                    1000,
                    "Cross Platform🌐",
                    
                    1000,
                    "React/React Native Dev📱",
                    
                    1000,
                  ]}
            />
                  </h1>
          <span className="profile-role-tagline">
          Knack of buliding application with front and back end operation. 
          </span> 
          </span> 
      </div>
      <div className="profile-options">
      <button className="btn primary-btn">
        {""}
        Hire Me{" "}
      </button>
      <a href="Wasif_Ali.pdf" download="Wasif_Ali.pdf">
        <button className="btn highlighted-btn">Get Resume</button>

      
      
      </a>
    </div>
    <div className="profile-picture">
      <div className="profile-picture-background"></div>
    </div>
    </div>
    </div>
    </div>
    
  );
}
