import React from 'react';
import ReactDOM from 'react-dom';

import BannerContainer from 'components/BannerContainer';
import bannerImage from 'images/chess.jpg';
import Update from 'components/Update';
import Scrollbar from 'smooth-scrollbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

import GamingCarousel from 'components/LightboxGallery';

import wow1 from 'images/gaming/wow1.png';
import wow2 from 'images/gaming/wow2.png';
import wow3 from 'images/gaming/wow3.png';
import wow4 from 'images/gaming/wow4.png';

import hs1 from 'images/gaming/hs5.png';
import hs2 from 'images/gaming/hs7.png';
import hs3 from 'images/gaming/hs3.png';
import hs4 from 'images/gaming/hs6.png';
import hs5 from 'images/gaming/hs4.png';

import sc1 from 'images/gaming/sc.jpg';
import sc2 from 'images/gaming/sc1.png';
import sc3 from 'images/gaming/sc3.png';

import lol0 from 'images/gaming/lol0.png';
import lol1 from 'images/gaming/lol1.png';
import lol2 from 'images/gaming/lol2.png';
import lol3 from 'images/gaming/lol3.png';
import lol4 from 'images/gaming/lol4.png';
import lol5 from 'images/gaming/lol5.png';

import ow1 from 'images/gaming/ow2.png';
import ow2 from 'images/gaming/ow3.png';
import ow3 from 'images/gaming/ow5.png';
import ow4 from 'images/gaming/ow6.png';

import diablo1 from 'images/gaming/diablo1.png';
import diablo2 from 'images/gaming/diablo2.png';
import diablo3 from 'images/gaming/diablo3.png';

import pokemon1 from 'images/gaming/pokemon1.png';
import pokemon2 from 'images/gaming/pokemon2.png';
import pokemon3 from 'images/gaming/pokemon3.png';

import neo1 from 'images/gaming/neo1.png';
import neo2 from 'images/gaming/neo2.png';
import neo3 from 'images/gaming/neo3.png';

import misc1 from 'images/gaming/misc1.jpg';
import misc2 from 'images/gaming/misc2.jpg';
import misc3 from 'images/gaming/misc3.jpg';
import misc4 from 'images/gaming/misc4.jpg';
import misc5 from 'images/gaming/misc5.png';
import misc6 from 'images/gaming/misc6.png';
import misc7 from 'images/gaming/misc7.png';

class GamingMisc extends React.Component {

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  componentDidMount() {
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
      {id: wow1},
      {id: wow2},
      {id: wow3},
      {id: wow4},
    ];
    const HS_ARRAY = [
      {id: hs1},
      {id: hs2},
      {id: hs3},
      {id: hs4},
      {id: hs5},
    ];
    const SC_ARRAY = [
      {id: sc1},
      {id: sc2},
      {id: sc3},
    ];
    const LOL_ARRAY = [
      {id: lol0},
      {id: lol1},
      {id: lol2},
      {id: lol3},
      {id: lol4},
      {id: lol5},
    ];
    const OW_ARRAY = [
      {id: ow1},
      {id: ow2},
      {id: ow3},
      {id: ow4},
    ];
    const D3_ARRAY = [
      {id: diablo1},
      {id: diablo2},
      {id: diablo3},
    ];
    const POKEMON_ARRAY = [
      {id: pokemon1},
      {id: pokemon2},
      {id: pokemon3},
    ];
    const NEO_ARRAY = [
      {id: neo1},
      {id: neo2},
      {id: neo3},
    ];
    const MISC_ARRAY = [
      {id: misc7},
      {id: misc2},
      {id: misc4},
      {id: misc1},
      {id: misc5},
      {id: misc6},
      {id: misc3},
    ];

    return (
      <div className='project_wrapper' id="gaming_body" tabIndex="0" ref="theDiv">
        <BannerContainer
          bgimage={bannerImage}
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
            title="NEOPETS"
          >
            A children's game site in the early 2000s, which boasted approximately 35 million unique users and 11 million unique IP addresses per month in 2005.
            Accumulated approximately between 150,000,000 and 200,000,000 'neopoints', in-game currency, in assets over the course of one year.
          </Update>
          <GamingCarousel
            carouselId = "#carousel_8"
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
            <br/>
            MTG - Experience in multiple formats including Limited, Standard, Modern, and Legacy from 2010 to 2014
            <br/>
            MTG Arena - Semi-infinite in MTG Arena draft.
            Generated about 400 booster packs (~$400) over the course of a weekend with a starting base of $50.
            <br/>
            MTG Arena - Mythic Rank shortly after release of ranked.
          </Update>
          <GamingCarousel
            carouselId = "#carousel_9"
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
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(GamingMisc);
