import React, { useState } from "react";
import { SocialPlatforms } from "../../assets/json/social_platforms";
import "./SocialMedia.css";

const SocialMedia = ({page}) => {
  const [socialPlatform, setSocialPlatform] = useState('');
  const socialIconHoverColor = {
    "--hover-color": socialPlatform
  }

  return (
    <div className={`${page==='MainPage' ? 'social-container' : 'social-container-footer'} mt-1`}>
      {SocialPlatforms.map((platform) => (
        platform.display &&
        (<a
          key={platform.displaySequence}
          className={`${page==='MainPage' ? 'logoClassBlack' : 'logoClassWhite'}`}
          onMouseOver={() => setSocialPlatform(platform.hoverColor)}
          style={socialIconHoverColor}
          href={platform.profileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${platform.logoClass} icon-margin`}></i>
        </a>)
      ))}
    </div>
  );
};

export default SocialMedia;