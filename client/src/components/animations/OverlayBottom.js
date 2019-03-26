import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class LoadIn extends React.Component{
  state = {
    response: false,
  };

  componentDidMount() {
    this.getDistanceFromTop();
    window.addEventListener('scroll', this.getDistanceFromTop);
    window.addEventListener('resize', this.getDistanceFromTop);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.getDistanceFromTop);
    window.removeEventListener('resize', this.getDistanceFromTop);
  }

  getDistanceFromTop = () => {
    this.setState({
      yValue: (ReactDOM.findDOMNode(this).getBoundingClientRect().top),
    });
  }

  render(){
    const {
      loadDelay,
    } = this.props;
    const {
      yValue,
    } = this.state;

    const objectName = classNames(
      'overlay_bottom',
      {
        'overlay_bottom--display': yValue < window.innerHeight,
      }
    );

    const addLoadDelay = {
      transitionDelay: loadDelay,
    };

    return(
      <div
        className={objectName}
      >
        {this.props.children}
        <div
          className="overlay_bottom__overlay"
          style={addLoadDelay}
        />
      </div>
    );
  }
}

export default LoadIn;
