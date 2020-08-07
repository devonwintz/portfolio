import React from "react";
import fb_icon from "./images/social-media-icons/fb-icon.png";
import linkedin_icon from "./images/social-media-icons/linkedin-icon.png";
import twitter_icon from "./images/social-media-icons/twitter-icon.png";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="name">Devon Wintz</div>
        </div>
      </div>
      <div className="row quote">
        <div className="col-md-12">
          "Simplicity is a precondition for reliability. While being able to
          control complexity is the prerequisite for arriving at simplicity."
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          &copy; All Rights Reserved By Devon Wintz
        </div>
        <div className="col-md-6 social-media-links">
          <a href="/#">
            <img src={fb_icon} alt="fb-icon" width="4%" />
          </a>
          <a href="/#" className="ml-2">
            <img src={twitter_icon} alt="twitter-icon" width="4%" />
          </a>
          <a href="/#" className="ml-2">
            <img src={linkedin_icon} alt="linkedin-icon" width="3%" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
