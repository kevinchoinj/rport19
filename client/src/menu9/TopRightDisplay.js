import React from 'react';
import {pageData} from 'data/pageData';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const TopRightDisplay = () => {
  return (
    <div className="menu_top_right">
      <div className="menu_top_right__title">
        <div className="menu_top_right__first">K E V I N</div>&nbsp;
        <div className="menu_top_right__last">C H O I</div>
      </div>
      <div className="menu_top_right__line">
        B.Sc Computer Science
        <br/>
        Rensselaer Polytechnic Institute
      </div>
      <div>
        {pageData.emailAddress}
      </div>
      <div className="contact_link menu_top_right__line">

        <div className="contact_icon">
          <a
            aria-label="github"
            href={pageData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="github"/>
          </a>
        </div>

        <div className="contact_icon">
          <a
            aria-label="music"
            href={pageData.musicLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="music"/>
          </a>
        </div>

        <div className="contact_icon">
          <Link
            to={pageData.gaming}
            aria-label="gaming"
          >
            <FontAwesome name="gamepad"/>
          </Link>
        </div>

        <div className="contact_icon">
          <a
            href={`mailto:${pageData.emailAddress}`}
            aria-label="email"
          >
            <FontAwesome name="envelope"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopRightDisplay;