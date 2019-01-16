import React from 'react';
import ReactDOM from 'react-dom';
import img1 from 'images/heroku/heroku1.png';
import img2 from 'images/heroku/heroku2.png';
import img3 from 'images/heroku/heroku3.png';
import img4 from 'images/heroku/heroku4.png';
import img5 from 'images/heroku/heroku5.png';
import img6 from 'images/heroku/heroku6.png';
import img7 from 'images/heroku/heroku7.png';
import img8 from 'images/heroku/heroku8.png';
import img9 from 'images/heroku/heroku9.png';
import img10 from 'images/heroku/heroku10.png';
import img11 from 'images/heroku/heroku11.png';
import img12 from 'images/heroku/heroku12.png';
import img13 from 'images/heroku/heroku13.png';
import img14 from 'images/heroku/heroku14.png';
import img15 from 'images/heroku/heroku15.png';
import img16 from 'images/heroku/heroku16.png';
import img17 from 'images/heroku/heroku17.png';
import img18 from 'images/heroku/heroku18.png';
import img19 from 'images/heroku/heroku19.png';
import img20 from 'images/heroku/heroku20.png';
import img21 from 'images/heroku/heroku21.png';
import img22 from 'images/heroku/heroku22.png';
import img23 from 'images/heroku/heroku23.png';
import img24 from 'images/heroku/heroku24.png';
import img25 from 'images/heroku/heroku25.png';
import img26 from 'images/heroku/heroku26.png';
import img27 from 'images/heroku/heroku27.png';
import img28 from 'images/heroku/heroku28.png';
import img30 from 'images/heroku/heroku30.png';
import img31 from 'images/heroku/heroku31.png';
import img32 from 'images/heroku/heroku32.png';
import img34 from 'images/heroku/heroku34.png';
import sites4 from 'images/lastfm/banner.jpg';
import Bannerimage from 'images/heroku/herokubanner.png';

import BannerContainer from 'components/BannerContainer';
import Scrollbar from 'smooth-scrollbar';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

class ProjectMisc extends React.Component {

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  componentDidMount() {
    this.focusDiv();
    var myDiv = document.getElementById('main_app');
    myDiv.scrollTop = 0;
    this.props.scrollActions.checkScroll(0);
    const scrollbar = Scrollbar.init(document.querySelector('#misc_body'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render() {
    const pageValues = [
      {text: 'Page1', link: 'http://shodyra1.herokuapp.com/', imageSrc: img1},
      {text: 'Page2', link: 'http://shodyra2.herokuapp.com/', imageSrc: img2},
      {text: 'Page3', link: 'http://shodyra3.herokuapp.com/', imageSrc: img3},
      {text: 'Page4', link: 'http://shodyra4.herokuapp.com/', imageSrc: img4},
      {text: 'Page5', link: 'http://shodyra5.herokuapp.com/', imageSrc: img5},
      {text: 'Page6', link: 'http://shodyra6.herokuapp.com/', imageSrc: img6},
      {text: 'Page7', link: 'http://shodyra7.herokuapp.com/', imageSrc: img7},
      {text: 'Page8', link: 'http://shodyra8.herokuapp.com/', imageSrc: img8},
      {text: 'Page9', link: 'http://shodyra9.herokuapp.com/', imageSrc: img9},
      {text: 'Page10', link: 'http://shodyra10.herokuapp.com/', imageSrc: img10},
      {text: 'Page11', link: 'http://shodyra11.herokuapp.com/', imageSrc: img11},
      {text: 'Page12', link: 'http://shodyra12.herokuapp.com/', imageSrc: img12},
      {text: 'Page13', link: 'http://shodyra13.herokuapp.com/', imageSrc: img13},
      {text: 'Page14', link: 'http://shodyra14.herokuapp.com/', imageSrc: img14},
      {text: 'Page15', link: 'http://shodyra15.herokuapp.com/', imageSrc: img15},
      {text: 'Page16', link: 'http://shodyra16.herokuapp.com/', imageSrc: img16},
      {text: 'Page17', link: 'http://shodyra17.herokuapp.com/', imageSrc: img17},
      {text: 'Page18', link: 'http://shodyra18.herokuapp.com/', imageSrc: img18},
      {text: 'Page19', link: 'http://shodyra19.herokuapp.com/', imageSrc: img19},
      {text: 'Page20', link: 'http://shodyra20.herokuapp.com/', imageSrc: img20},
      {text: 'Page21', link: 'http://shodyra21.herokuapp.com/', imageSrc: img21},
      {text: 'Page22', link: 'http://shodyra22.herokuapp.com/', imageSrc: img22},
      {text: 'Page23', link: 'http://shodyra23.herokuapp.com/', imageSrc: img23},
      {text: 'Page24', link: 'http://shodyra24.herokuapp.com/', imageSrc: img24},
      {text: 'Page25', link: 'http://shodyra25.herokuapp.com/', imageSrc: img25},
      {text: 'Page26', link: 'http://shodyra26.herokuapp.com/', imageSrc: img26},
      {text: 'Page27', link: 'http://shodyra27.herokuapp.com/', imageSrc: img27},
      {text: 'Page28', link: 'http://shodyra28.herokuapp.com/', imageSrc: img28},
      {text: 'Page30', link: 'http://shodyra30.herokuapp.com/', imageSrc: img30},
      {text: 'Page31', link: 'http://shodyra31.herokuapp.com/', imageSrc: img31},
      {text: 'Page32', link: 'http://shodyra32.herokuapp.com/', imageSrc: img32},
      {text: 'Page34', link: 'http://shodyra34.herokuapp.com/', imageSrc: img34},
      {text: 'lastfm', link: 'https://lastfm.shodyra.com/', imageSrc: sites4},
    ];
    return (
      <div className="project_wrapper" id="misc_body"  ref="theDiv" tabIndex="0">
        <BannerContainer
          bgimage={Bannerimage}
          line1="Misc Projects"
        />
        <div className="project_body">
          <div className="misc_wrap">
            {pageValues.reverse().map((value, key)=> (
              <div className="misc_image__container" key={key}>
                <div className="misc_title">
                  {value.text}
                </div>
                <a href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={value.imageSrc} alt="" className="misc_image"/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(ProjectMisc);
