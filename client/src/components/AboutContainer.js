import React from 'react';

export default class About extends React.Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <div className="project_about">
        <div className="project_smallfont about_title">
          {title && title.split('').map((value, key) => {
            if (value === ' ') {
              return (
                <div key={key} className="project_smallfont__break">
                </div>
              );
            }
            else {
              return (
                <div key={key} className="project_smallfont__letter">
                  {value}
                </div>
              );
            }
          })}
        </div>
        <div className="about_body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
