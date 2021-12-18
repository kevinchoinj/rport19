import React, {useEffect} from "react";
import Banner from "components/projects/Banner";
import Update from "components/projects/Update";
import {connect} from "react-redux";
import {toggleMenu} from "actions/menu";
import {gamingData} from "data/gamingData";
import GamingCarousel from "components/projects/LightboxViewer";
import styled from "styled-components";
import Lightbox from "components/projects/Lightbox";
import Skew from "components/projects/Skew";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorText};
  padding-top: 6rem;
  a {
    color: ${props=> props.theme.colorLink};
    text-decoration: none;
    transition: ${props => props.theme.transitionMedium};
    :hover {
      color: ${props => props.theme.colorTheme};
    }
  }
`;
const GamingMisc = ({ toggleMenu }) => {
  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <Skew>
      <Banner
        line1="Misc Games"
      />
      <StyledContainer>

        <Update
          title="WORLD OF WARCRAFT"
          displayName="wow"
        >
          Peak rating of ~2900 Elo. 8th highest rated player in the world and highest rated shaman in the world in 2008.
          <div>
            <a href="https://i.imgur.com/Lu7P1xd.png"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Image of 8th place worldwide
            </a>
          </div>
          <div>
            <a href="https://i.imgur.com/xQ2XFmo.png"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Image of rank 1 shaman worldwide
            </a>
          </div>
          <div>
            <a href="https://i.imgur.com/Y9YGLGD.jpg"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Image of highest 3v3 and 5v5 team on the battlegroup
            </a>
          </div>
          <div>
            <a href="http://web.archive.org/web/20090618080239/http://www.arenajunkies.com/char/US/Mug'thol/Myhope/"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              June 2009 Archive
            </a>
          </div>
          <div>
            <a href="https://i.imgur.com/VIWFIwx.png"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Image of rank 1 on a different battlegroup with 197 wins - 34 losses
            </a>
          </div>
          <div>
            <a href="https://web.archive.org/web/20090609065129/http://www.arenajunkies.com:80/rankings/3v3/us"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Archive 80th place 3v3 team Globally June 2009
            </a>
          </div>
          <div>
            <a href="http://web.archive.org/web/20100416021904/http://www.arenajunkies.com:80/team/2v2/US/Auchindoun/LIGHTS_PVP/"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Archive 99th place 2v2 team Globally April 2010
            </a>
          </div>
          <div>
            <a href="http://web.archive.org/web/20100527125254/http://www.arenajunkies.com:80/team/3v3/US/Auchindoun/L_S_D/"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Archive 108th place 3v3 team Globally May 2010
            </a>
          </div>
          <div>
            <a href="https://web.archive.org/web/20100314071257/http://www.arenajunkies.com/rankings/player/US/Shaman"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Archive 21st place Shaman Globally March 2010
            </a>
          </div>
          <div>
            <a href="http://web.archive.org/web/20090618115850/http://www.arenajunkies.com/team/5v5/US/Mug'thol/Scallywags"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Archive 5th place 5v5 Team Globally June 2009
            </a>
          </div>
        </Update>

        <GamingCarousel
          images = {gamingData.WOW_ARRAY}
        />

        <Update
          title="HEARTHSTONE"
          displayName="hs"
        >
          19th highest rated arena player in North America May 2017, 90th Highest arena player in North America January 2018.
          <div>
            <a href="http://us.battle.net/hearthstone/en/blog/20838076/top-hearthstone-players-may-2017-6-8-2017"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              19th place North America
            </a>
          </div>
          <div>
            <a href="https://playhearthstone.com/en-us/blog/21513836"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              90th place North America
            </a>
          </div>
        </Update>

        <GamingCarousel
          images = {gamingData.HS_ARRAY}
        />

        <Update
          title="STARCRAFT II"
          displayName="sc"
        >
          Master League (top 2%) in 2010.
          <div>
            <a href="http://us.battle.net/sc2/en/profile/847646/1/LighTs/"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Profile
            </a>
          </div>
        </Update>

        <GamingCarousel
          images = {gamingData.SC_ARRAY}
        />

        <Update
          title="LEAGUE OF LEGENDS"
          displayName="lol"
        >
          Diamond League (top 0.5%) 2010 - 2020.
          <div>
            <a href="http://na.op.gg/summoner/userName=shodyra"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Profile with diamond rating in Seasons 4, 5, 6, 7, 8, 9, and 10.
            </a>
          </div>
        </Update>
        <GamingCarousel
          images = {gamingData.LOL_ARRAY}
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
          images = {gamingData.OW_ARRAY}
        />

        <Update
          title="DIABLO III"
          displayName="d3"
        >
          Finished 'Inferno' Difficulty shortly after the release of Diablo 3 on June 3,
          2012 while earning ~$3,000 through the 'Real Money Auction House'.
          <div>
            <a href="https://us.battle.net/d3/en/profile/Shodyra-1119/hero/87303905"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Profile link
            </a>
          </div>
        </Update>

        <GamingCarousel
          images = {gamingData.D3_ARRAY}
        />

        <Update
          title="POKEMON"
        >
          Following the release of Pokemon X and Y in 2013, used 'Instacheck Hotspot' to legitimately generate shiny perfect-IV pokemon,
          which are otherwise generated at a 1 in 393,216 rate. Using this method, approximately $10,000 was generated over 10 days. Instacheck
          Hotspot used my computer's wireless connection to create a wi-fi hotspot, which then was used to analyze all network traffic going to my 3DS.
        </Update>

        <GamingCarousel
          images = {gamingData.POKEMON_ARRAY}
        />

        <Update
          title="MAGIC: THE GATHERING"
        >
          Paper MTG - Experience in multiple formats including Limited, Standard, Modern, and Legacy from 2010 to 2014. Generated ~$25,000 in prize earnings and card speculation/trading/selling.
          <br/>
          MTG Arena
          <br/>
          2019 - Peak Rank 31 Limited
          <br/>
          July 2021 - Peak Rank 17th DND Limited, End of season 58th
          <br/>
          August 2021 - Peak Rank 187th DND Limited, End of season 419th
          <br/>
          September 2021 - Peak Rank 70th MID Limited, End of Season 355th
        </Update>
        <GamingCarousel
          images = {gamingData.MTG_ARRAY}
        />

        <Update
          title="NEOPETS"
        >
          A children's game site in the early 2000s, which boasted approximately 35 million unique users and 11 million unique IP addresses per month in 2005.
          Accumulated approximately between 150,000,000 and 200,000,000 'neopoints', in-game currency, in assets over the course of one year.
        </Update>
        <GamingCarousel
          images = {gamingData.NEO_ARRAY}
        />

        <Update
          title="TEAMFIGHT TACTICS"
        >
          Diamond - Set 3, Set 3.5, Set 4.5, Set 5.5, Set 6
          <div>
            <a href="https://lolchess.gg/index.php/profile/na/shodyra?hl=en-US"
              aria-label="gaming link"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming_link">
              Profile link
            </a>
          </div>
        </Update>
        <GamingCarousel
          images = {gamingData.TFT_ARRAY}
        />

        <Update
          title="MISC"
        >
          King's Raid - KING’S CRAIDERS CUP WORLD WIDE PVP TOURNAMENT 3rd Place (NA)
          <br/>
          Counterstrike: Global Offensive - Legendary Eagle rank with limited FPS experience
          <br/>
          WoW (BFA) - Gladiator (2400+) rating after an eight year break from the game in week 6 (top ~600)
          <br/>
          WoW (SL) - Gladiator (2400+) in week 7 (~top 900)
          <br/>
          Path of Exile - Multiple level ~90 characters
        </Update>
        <GamingCarousel
          images = {gamingData.MISC_ARRAY}
        />

      </StyledContainer>
      <Lightbox/>
    </Skew>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu(false));
    },
  };
};

export default React.memo(connect(null, mapDispatchToProps)(GamingMisc));