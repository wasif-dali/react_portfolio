import React from "react";
import Typical from "react-typical";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
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
          </span>
      </div>
    </div>
    </div>
    </div>
    
  );
}
