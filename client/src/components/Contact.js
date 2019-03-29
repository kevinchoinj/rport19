import React from 'react';
import {pageData} from 'data/pageData';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export default class Contact extends React.Component{
  render(){

    return(
      <div className="contact">
        <div className="contact_inner">
          <div className="contact_link">

            <div className="contact_icon">
              <a
                href={pageData.githubLink}
                aria-label="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesome name="github"/>
              </a>
            </div>

            <div className="contact_icon">
              <a
                href={pageData.musicLink}
                aria-label="music"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesome name="music"/>
              </a>
            </div>

            <div className="contact_icon">
              <Link
                aria-label="gaming"
                to={pageData.gaming}
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
          <div>
            <a href={`mailto:${pageData.emailAddress}`}>
              {pageData.emailAddress}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
