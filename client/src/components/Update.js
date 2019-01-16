import React from 'react';

class Update extends React.Component {
  render() {
    const {
      title,
      children,
    } = this.props;

    return (
      <div className="update">
        <div className="update_content">
          <div className="update_smallfont about_title no_select">
            {title}
          </div>
          <div className="about_body no_select">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Update;