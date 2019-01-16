import React from 'react';
import LoadIn from 'components/LoadIn';

const LABEL_ONE = 'TITLE';
const LABEL_TWO = 'YEAR';
const LABEL_THREE = 'LANG';
const LABEL_FOUR = 'LINK';

const TextDisplay = ({textLine, loadDelay, label}) => {
  if (label === LABEL_FOUR && textLine) {
    return (
      <div className="project_banner_text__under">
        <LoadIn
          loadDelay={loadDelay}
          onPageLoad={true}
        >
          {label}
          <br/>
          <span className='project_banner_text__small'>
            <a
              href={textLine}
              target="_blank"
              rel="noopener noreferrer"
            >
              {textLine}
            </a>
          </span>
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
          <span className='project_banner_text__small'>
            {textLine}
          </span>
        </LoadIn>
      </div>
    );
  }
  else {
    return null;
  }
};

export default class Banner extends React.Component {
  render() {

    const {
      line1,
      line2,
      line3,
      line4,
    } = this.props;

    return (
      <div className="project_banner_text">
        <div className="project_banner_text__container">
          <TextDisplay
            textLine = {line1}
            loadDelay = "0s"
            label = {LABEL_ONE}
          />
          <TextDisplay
            textLine = {line2}
            loadDelay = "0.2s"
            label = {LABEL_TWO}
          />
          <TextDisplay
            textLine = {line3}
            loadDelay = "0.4s"
            label = {LABEL_THREE}
          />
          <TextDisplay
            textLine = {line4}
            loadDelay = "0.6s"
            label = {LABEL_FOUR}
          />
        </div>
      </div>
    );
  }
}
