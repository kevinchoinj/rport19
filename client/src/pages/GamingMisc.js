import React from 'react';
import ReactDOM from 'react-dom';

import BannerContainer from 'components/BannerContainer';
import Update from 'components/Update';
import Scrollbar from 'smooth-scrollbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import * as scrollActions from 'actions/scroll';

import GamingCarousel from 'components/LightboxGallery';

class GamingMisc extends React.Component {

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  componentDidMount() {
    this.props.menuActions.toggleMenu(false);
    this.focusDiv();
    var myDiv = document.getElementById('main_app');
    myDiv.scrollTop = 0;
    this.props.scrollActions.checkScroll(0);
    const scrollbar = Scrollbar.init(document.querySelector('#gaming_body'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render() {

    const WOW_ARRAY = [
      {id: '/static/images/gaming/wow0.png'},
      {id: '/static/images/gaming/wow1.png'},
      {id: '/static/images/gaming/wow2.png'},
      {id: '/static/images/gaming/wow3.png'},
      {id: '/static/images/gaming/wow4.png'},
      {id: '/static/images/gaming/wow5.png'},
      {id: '/static/images/gaming/wow6.png'},
      {id: '/static/images/gaming/wow7.png'},
    ];
    const HS_ARRAY = [
      {id: '/static/images/gaming/hs5.png'},
      {id: '/static/images/gaming/hs7.png'},
      {id: '/static/images/gaming/hs3.png'},
      {id: '/static/images/gaming/hs6.png'},
      {id: '/static/images/gaming/hs4.png'},
    ];
    const SC_ARRAY = [
      {id: '/static/images/gaming/sc.png'},
      {id: '/static/images/gaming/sc1.png'},
      {id: '/static/images/gaming/sc3.png'},
    ];
    const LOL_ARRAY = [
      {id: '/static/images/gaming/lol0.png'},
      {id: '/static/images/gaming/lol1.png'},
      {id: '/static/images/gaming/lol2.png'},
      {id: '/static/images/gaming/lol3.png'},
      {id: '/static/images/gaming/lol4.png'},
      {id: '/static/images/gaming/lol5.png'},
    ];
    const OW_ARRAY = [
      {id: '/static/images/gaming/ow2.png'},
      {id: '/static/images/gaming/ow3.png'},
      {id: '/static/images/gaming/ow5.png'},
      {id: '/static/images/gaming/ow6.png'},
    ];
    const D3_ARRAY = [
      {id: '/static/images/gaming/diablo1.png'},
      {id: '/static/images/gaming/diablo2.png'},
      {id: '/static/images/gaming/diablo3.png'},
    ];
    const POKEMON_ARRAY = [
      {id: '/static/images/gaming/pokemon1.png'},
      {id: '/static/images/gaming/pokemon2.png'},
      {id: '/static/images/gaming/pokemon3.png'},
    ];
    const MTG_ARRAY = [
      {id: '/static/images/gaming/misc8.png'},
      {id: '/static/images/gaming/misc7.png'},
      {id: '/static/images/gaming/misc5.png'},
    ];
    const NEO_ARRAY = [
      {id: '/static/images/gaming/neo1.png'},
      {id: '/static/images/gaming/neo2.png'},
      {id: '/static/images/gaming/neo3.png'},
    ];
    const MISC_ARRAY = [
      {id: '/static/images/gaming/misc2.jpg'},
      {id: '/static/images/gaming/misc4.jpg'},
      {id: '/static/images/gaming/misc1.jpg'},
      {id: '/static/images/gaming/misc3.jpg'},
    ];

    return (
      <div className='project_wrapper' id="gaming_body" tabIndex="0" ref="theDiv">
        <BannerContainer
          bgimage='/static/images/chess.jpg'
          line1="Misc Games"
        />
        <div className='project_body'>

          <Update
            title="WORLD OF WARCRAFT"
            displayName="wow"
          >
            Peak rating of ~2900 Elo. 8th highest rated player in the world and highest rated shaman in the world in 2008.
            <div>
              <a href="https://i.imgur.com/Lu7P1xd.png"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Image of 8th place worldwide
              </a>
            </div>
            <div>
              <a href="https://i.imgur.com/xQ2XFmo.png"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Image of rank 1 shaman worldwide
              </a>
            </div>
            <div>
              <a href="https://i.imgur.com/Y9YGLGD.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Image of highest 3v3 and 5v5 team on the battlegroup
              </a>
            </div>
            <div>
              <a href="http://web.archive.org/web/20090618080239/http://www.arenajunkies.com/char/US/Mug'thol/Myhope/"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                June 2009 Archive
              </a>
            </div>
            <div>
              <a href="https://i.imgur.com/VIWFIwx.png"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Image of rank 1 on a different battlegroup with 197 wins - 34 losses
              </a>
            </div>
            <div>
              <a href="https://web.archive.org/web/20090609065129/http://www.arenajunkies.com:80/rankings/3v3/us"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Archive 80th place 3v3 team Globally June 2009
              </a>
            </div>
            <div>
              <a href="http://web.archive.org/web/20100416021904/http://www.arenajunkies.com:80/team/2v2/US/Auchindoun/LIGHTS_PVP/"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Archive 99th place 2v2 team Globally April 2010
              </a>
            </div>
            <div>
              <a href="http://web.archive.org/web/20100527125254/http://www.arenajunkies.com:80/team/3v3/US/Auchindoun/L_S_D/"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Archive 108th place 3v3 team Globally May 2010
              </a>
            </div>
            <div>
              <a href="https://web.archive.org/web/20100314071257/http://www.arenajunkies.com/rankings/player/US/Shaman"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Archive 21st place Shaman Globally March 2010
              </a>
            </div>
            <div>
              <a href="http://web.archive.org/web/20090618115850/http://www.arenajunkies.com/team/5v5/US/Mug'thol/Scallywags"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Archive 5th place 5v5 Team Globally June 2009
              </a>
            </div>
          </Update>

          <GamingCarousel
            carouselId = "#carousel_1"
            imageArray = {WOW_ARRAY}
          />

          <Update
            title="HEARTHSTONE"
            displayName="hs"
          >
            19th highest rated arena player in North America May 2017, 90th Highest arena player in North America January 2018.
            <div>
              <a href="http://us.battle.net/hearthstone/en/blog/20838076/top-hearthstone-players-may-2017-6-8-2017"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                19th place North America
              </a>
            </div>
            <div>
              <a href="https://playhearthstone.com/en-us/blog/21513836"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                90th place North America
              </a>
            </div>
          </Update>

          <GamingCarousel
            carouselId = "#carousel_2"
            imageArray = {HS_ARRAY}
          />

          <Update
            title="STARCRAFT II"
            displayName="sc"
          >
            Master League (top 2%) in 2010.
            <div>
              <a href="http://us.battle.net/sc2/en/profile/847646/1/LighTs/"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Profile
              </a>
            </div>
          </Update>

          <GamingCarousel
            carouselId = "#carousel_3"
            imageArray = {SC_ARRAY}
          />

          <Update
            title="LEAGUE OF LEGENDS"
            displayName="lol"
          >
            Diamond League (top 0.5%) 2010 - 2019.
            <div>
              <a href="http://na.op.gg/summoner/userName=shodyra"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Profile with diamond rating in Seasons 4, 5, 6, 7, 8, and 9.
              </a>
            </div>
          </Update>
          <GamingCarousel
            carouselId = "#carousel_4"
            imageArray = {LOL_ARRAY}
          />

          <Update
            title="OVERWATCH"
          >
            Season 1 - 63 Rating,
            <br/>
            Season 2 - Diamond,
            <br/>
            Season 3 - Diamond
          </Update>

          <GamingCarousel
            carouselId = "#carousel_5"
            imageArray = {OW_ARRAY}
          />

          <Update
            title="DIABLO III"
            displayName="d3"
          >
            Finished 'Inferno' Difficulty shortly after the release of Diablo 3 on June 3,
            2012 while earning ~$3,000 through the 'Real Money Auction House'.
            <div>
              <a href="https://us.battle.net/d3/en/profile/Shodyra-1119/hero/87303905"
                target="_blank"
                rel="noopener noreferrer"
                className="gaming_link">
                Profile link
              </a>
            </div>
          </Update>

          <GamingCarousel
            carouselId = "#carousel_6"
            imageArray = {D3_ARRAY}
          />

          <Update
            title="POKEMON"
          >
            Following the release of Pokemon X and Y in 2013, used 'Instacheck Hotspot' to legitimately generate shiny perfect-IV pokemon,
            which are otherwise generated at a 1 in 393,216 rate. Using this method, approximately $10,000 was generated over 10 days. Instacheck
            Hotspot used my computer's wireless connection to create a wi-fi hotspot, which then was used to analyze all network traffic going to my 3DS.
          </Update>

          <GamingCarousel
            carouselId = "#carousel_7"
            imageArray = {POKEMON_ARRAY}
          />

          <Update
            title="MAGIC: THE GATHERING"
          >
            Paper MTG - Experience in multiple formats including Limited, Standard, Modern, and Legacy from 2010 to 2014. Generated ~$25,000 in prize earnings and card speculation/trading/selling.
            <br/>
            MTG Arena - Rank 31st globally for Limited 2019 . Mythic Constructed/Limited.
            <br/>

          </Update>
          <GamingCarousel
            carouselId = "#carousel_8"
            imageArray = {MTG_ARRAY}
          />

          <Update
            title="NEOPETS"
          >
            A children's game site in the early 2000s, which boasted approximately 35 million unique users and 11 million unique IP addresses per month in 2005.
            Accumulated approximately between 150,000,000 and 200,000,000 'neopoints', in-game currency, in assets over the course of one year.
          </Update>
          <GamingCarousel
            carouselId = "#carousel_9"
            imageArray = {NEO_ARRAY}
          />

          <Update
            title="MISC"
          >
            Counterstrike: Global Offensive - Legendary Eagle rank with limited FPS experience
            <br/>
            WoW - Gladiator (2400+) rating after an eight year break from the game
            <br/>
            Path of Exile - Multiple level ~90 characters
          </Update>
          <GamingCarousel
            carouselId = "#carousel_10"
            imageArray = {MISC_ARRAY}
          />

        </div>
      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(GamingMisc);
