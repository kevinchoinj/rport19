import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class LoadIn extends React.Component{
  state = {
    yValue: 0,
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
      'load_in_object',
      {
        'load_in_object--display': yValue < window.innerHeight,
      }
    );

    const addLoadDelay = {
      animationDelay: loadDelay,
    };

    return(
      <div
        className={objectName}
        style={addLoadDelay}
      >
        {this.props.children}
      </div>
    );
  }
}

export default LoadIn;
