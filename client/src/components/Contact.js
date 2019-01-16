import React from 'react';
import {pageData} from 'data/pageData';

export default class Contact extends React.Component{
  render(){
    return(
      <div className="contact">
        <div className="contact_inner">
          <div className="contact_link">
            <a
              href={pageData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br/>
            {pageData.emailAddress}
          </div>
        </div>
      </div>
    );
  }
}
