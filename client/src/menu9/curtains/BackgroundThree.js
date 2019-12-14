import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Curtains} from 'curtainsjs';
import {TimelineMax} from 'gsap';
import styled from 'styled-components';
import { menuData } from 'data/menuData';
import {
  selectMenuDisplay,
  selectMenuHover,
  selectLoadedContent,
} from 'reducers';
import {findIndex, propEq} from 'ramda';
import {withRouter} from 'react-router-dom';
/* https://codepen.io/AlainBarrios/pen/NWKaxNW */

class WEBGL {
  constructor(set) {
    this.canvas = set.canvas;
    this.webGLCurtain = new Curtains({container: document.getElementById("canvas")});
    this.planeElement = set.planeElement;
    this.texture = {
      current: "",
      next: ""
    };
    this.mouse = {
      x: 0,
      y: 0
    };
    this.params = {
      vertexShader: document.getElementById("vs").textContent, // our vertex shader ID
      fragmentShader: document.getElementById("fs").textContent, // our framgent shader ID
      widthSegments: 40,
      heightSegments: 40, // we now have 40*40*6 = 9600 vertices !
      uniforms: {
        time: {
          name: "uTime", // uniform name that will be passed to our shaders
          type: "1f", // this means our uniform is a float
          value: 0
        },
        mousepos: {
          name: "uMouse",
          type: "2f",
          value: [0, 0]
        },
        resolution: {
          name: "uReso",
          type: "2f",
          value: [window.innerWidth, window.innerHeight]
        },
        progress: {
          name: "uProgress",
          type: "1f",
          value: 0
        },
        brightness: {
          name: "uBrightness",
          type: "1f",
          value: 1
        }
      }
    };
  }
  initPlane() {
    // create our plane mesh
    this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);
    // use the onRender method of our plane fired at each requestAnimationFrame call
    if (this.plane) {
      this.plane.onReady(() => {
        this.texture.current = this.plane.createTexture("textureActive");
        this.plane.alwaysDraw = true
        this.texture.current.setSource(this.plane.images[0]);
        this.update();
      });
    }
  }
  update() {
    this.plane.onRender(() => {
      this.plane.updatePosition()
      this.plane.uniforms.time.value += 0.01; // update our time uniform value
    });
  }
}



const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const StyledContainer = styled.div`
  color: #fff;
  font-size: 1rem;
  padding-left: 3rem;
  padding-top: 1rem;
  padding-right: 3rem;
  padding-bottom: 1rem;
  height: 100%;
  a {
    text-decoration: none;
  }
`;
const StyledWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const StyledCanvas = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;
const StyledPlane = styled.div`
  width: 100%;
  min-height: 100%;
  z-index: 100;
  img {
    display: none;
  }
`;

const WidgetCards = ({hoverOption, loadedContent, menuDisplay, location}) => {
  const [currentIndex, setCurrentIndex] = useState(5);

  const [loadedImages, setLoadedImages] = useState(0);
  const [tl, setTl] = useState(null);
  const [webgl, setWebgl] = useState(null);
  useEffect(() => {
    setTl(new TimelineMax());
    setWebgl(new WEBGL({
      canvas: document.getElementById("canvas"),
      planeElement: document.getElementsByClassName("plane")[0]
    }));

  }, [])
  useEffect(() => {
    if (webgl) {
    webgl.initPlane();
    }
  }, [webgl])

  useEffect(() => {
    if (loadedImages === 15) {
      if (!menuDisplay) {
        const newIndex = findIndex(propEq('link', loadedContent))(menuData);
        if (tl && webgl && (newIndex !==currentIndex)) {
          tl.clear();
          tl.to(webgl.plane.uniforms.brightness, 0.2, {
            value: 0,
            onComplete() {
              webgl.texture.current.setSource(webgl.plane.images[newIndex]);
            }
          }).to(webgl.plane.uniforms.brightness, 0.9, {
            value: 1
          })
        }
      setCurrentIndex(newIndex);
      }
      else if (hoverOption || (hoverOption === 0)) {
        if(currentIndex === hoverOption) {
          return;
        }
        if (tl && webgl) {
          tl.clear();
          tl.to(webgl.plane.uniforms.brightness, 0.2, {
            value: 0,
            onComplete() {
              webgl.texture.current.setSource(webgl.plane.images[hoverOption]);
            }
          }).to(webgl.plane.uniforms.brightness, 0.9, {
            value: 1
          })
        }
        setCurrentIndex(hoverOption);
      }
    }

  }, [location.pathname, hoverOption, loadedImages, menuDisplay]);


  return (
    <StyledWrapper isHomepage={loadedContent==="/"}>
      <StyledContainer>
      <StyledWrap>
        <StyledCanvas id="canvas"/>

        <StyledPlane className="plane">
          {menuData.map(val =>
            <img key={val.text} src={val.image} alt={val.text} onLoad={() => setLoadedImages(prevLoadedImages => prevLoadedImages + 1)}/>
          )}

        </StyledPlane>
      </StyledWrap>
    </StyledContainer>
  </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    hoverOption: selectMenuHover(state),
    loadedContent: selectLoadedContent(state),
  };
};
export default connect (mapStateToProps, null)(withRouter(WidgetCards));
