import React from "react";
import { SocialPlatforms } from "../../assets/json/social_platforms";
import "./SocialMedia.css";

const SocialMedia = ({page}) => {
  return (
    <div className={`${page==='MainPage' ? 'social-container' : 'social-container-footer'} mt-1`}>
      {SocialPlatforms.map((platform) => (
        <a
          key={platform.displaySequence}
          href={platform.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${page==='MainPage' ? 'logoClassBlack' : 'logoClassWhite'}`}
        >
          <i className={`${platform.logoClass} icon-margin`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;