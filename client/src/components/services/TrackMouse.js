import React, {useState} from 'react';
import Arrow from 'components/services/Arrow';

const TrackMouse = ({children}) => {
  const [mousePosition, setMousePosition] = useState({xValue: 0, yValue: 0});
  return(
    <div onMouseMove={(e) => setMousePosition({xValue: e.clientX, yValue: e.clientY})}>
      {children}
      <Arrow mousePosition={mousePosition}/>
    </div>
  );
};

export default TrackMouse;