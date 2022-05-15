import styled from "styled-components";
import { hoverMenuOption } from "actions/menu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "actions/menu";

const StyledWrapper = styled.div`
  padding: 42px 48px;
  color: ${(props) => props.theme.topRightText};
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 992px) {
    padding: 50px 100px 50px 25px;
  }
`;
const TitleWrapper = styled.div`
  letter-spacing: 3px;
  color: ${(props) => props.theme.topRightText};
  > div:nth-child(2) {
    color: ${(props) => props.theme.colorTheme};
  }
  margin-bottom: 1rem;
  cursor: default;
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (max-height: 840px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`;
const DetailsWrapper = styled.div`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Josefin Sans", sans-serif;
  @media screen and (max-height: 600px) {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
    line-height: 1.5rem;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
  a {
    color: ${(props) => props.theme.colorLink};
    text-decoration: none;
    transition: ${(props) => props.theme.transitionMedium};
    :hover {
      color: ${(props) => props.theme.colorTheme};
    }
  }
`;

const GamingLink = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/gaming"
      onClick={() => {
        dispatch(toggleMenu(false));
      }}
      onMouseOver={() => dispatch(hoverMenuOption("/static/images/chess.jpg"))}
    >
      {children}
    </Link>
  );
};

const TopRightDisplay = () => {
  return (
    <StyledWrapper>
      <div>
        <TitleWrapper>
          <div>K E V I N</div>&nbsp;
          <div>C H O I</div>
        </TitleWrapper>
        <DetailsWrapper>
          2013 - HTML/CSS/PHP
          <br />
          2014 - B.Sc Computer Science @ RPI
          <br />
          2015 - Javascript/Ruby
          <br />
          2016 - Why Not Smile
          <br />
          2017 - React/Node.js
          <br />
          2019 - Cloud-Elements
          <br />
          2021 - 2nd @ TechCrunch Miami (Redact)
          <br />
          2017-now - Freelance (Shodyra)
          <br />
          2020-now - Redact
          <br />
          2021-now - UiPath
          <br />
          <br />
          <GamingLink>2008 - Rank 8 WoW global</GamingLink>
          <br />
          <GamingLink>2010 - Top 10k LoL / Top 400 SC2 NA</GamingLink> <br />
          <GamingLink>2017 - Rank 19 HS Arena NA</GamingLink>
          <br />
          <GamingLink>2021 - Top 20 MTG Arena global</GamingLink>
          <br />
          <GamingLink>2022 - Top 500 Lost Ark NA</GamingLink>
        </DetailsWrapper>
      </div>
    </StyledWrapper>
  );
};

export default TopRightDisplay;
