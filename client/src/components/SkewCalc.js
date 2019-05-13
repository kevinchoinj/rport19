import {
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

//https://github.com/facebook/react/issues/14195
//useMutationEffect removed: https://github.com/facebook/react/pull/14336
const useAnimationFrame = callback => {
  const callbackRef = useRef(callback);
  useLayoutEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  const loop = () => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();
  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    return () =>
      cancelAnimationFrame(frameRef.current);
  });
};

//relearn: 'if you have pure functions created inside the component everytime the component is instantiated you will construct that function again'
const calcSpeed = (currentPixel, setCurrentPixel) => {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel;
  const top = 6;
  const intensity = 0.5;
  const speed = top * ((2/(1+Math.exp(-1 * intensity * diff)))-1);
  setCurrentPixel(newPixel);
  return speed;
};

const SkewCalc = props => {
  const [currentPixel, setCurrentPixel] = useState(window.pageYOffset);
  useAnimationFrame(() => {
    props.looper(calcSpeed(currentPixel, setCurrentPixel));
  });

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    looper: (speed) => {
      dispatch(scrollActions.setSkew(speed));
    },
  };
};

export default connect (null, mapDispatchToProps)(SkewCalc);
