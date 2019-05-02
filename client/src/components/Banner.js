import React from 'react';
import LoadIn from 'components/animations/LoadIn';

const TextDisplay = ({textLine, loadDelay, label}) => {
  if (label === 'LINK' && textLine) {
    return (
      <div className="project_banner_text__under">
        <LoadIn
          loadDelay={loadDelay}
          onPageLoad={true}
        >
          {label}
          <br/>
          <div className='project_banner_text__small'>
            <a
              href={textLine}
              aria-label={`${label} link`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </LoadIn>
      </div>
    );
  }
  else if (textLine) {
    return (
      <div className="project_banner_text__under">
        <LoadIn
          loadDelay={loadDelay}
          onPageLoad={true}
        >
          {label}
          <br/>
          <div className='project_banner_text__small'>
            {textLine}
          </div>
        </LoadIn>
      </div>
    );
  }
  else {
    return null;
  }
};

const Banner = ({line1, line2, line3, line4}) => {
  return (
    <div className="project_banner__container">
      <div className="project_banner_text">
        <div className="project_banner_text__container">
          <TextDisplay
            textLine = {line1}
            loadDelay = "0s"
            label = 'TITLE'
          />
          <TextDisplay
            textLine = {line2}
            loadDelay = "0.2s"
            label = 'YEAR'
          />
          <TextDisplay
            textLine = {line3}
            loadDelay = "0.4s"
            label = 'LANG'
          />
          <TextDisplay
            textLine = {line4}
            loadDelay = "0.6s"
            label = 'LINK'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;