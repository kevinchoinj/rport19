import { hoverMenuOption } from "actions/menu";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "data/menuData";
import styled from "styled-components";
import { selectMenuDisplay } from "reducers";

const StyledLinkWrapper = styled.div`
  display: flex;
  padding-left: 28px;
  padding-right: 6rem;
  box-sizing: border-box;
`;

const LinkDivWrapper = ({ value }) => {
  const dispatch = useDispatch();
  if (window.innerWidth >= 768) {
    return (
      <StyledLinkWrapper onMouseOver={() => dispatch(hoverMenuOption(value.image))}>
        <StyledNumber>{value.number}</StyledNumber>
        <div style={{ marginLeft: "1rem" }}>{value.text}</div>
      </StyledLinkWrapper>
    );
  } else {
    return (
      <StyledLinkWrapper>
        <StyledNumber>{value.number}</StyledNumber>
        <div style={{ marginLeft: "1rem" }}>{value.text}</div>
      </StyledLinkWrapper>
    );
  }
};

const StyledLinkDiv = styled.div`
  font-size: 4.5vw;
  line-height: 150%;
  font-family: "Josefin Sans", Helvetica, sans-serif;
  color: ${(props) => props.theme.colorTheme};
  cursor: default;
  text-decoration: line-through;
  @media screen and (max-width: 1920px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0px;
    font-size: var(--size-large);
    line-height: 150%;
  }
`;
const LinkObject = ({ className, link, children }) => (
  <Link to={link} className={className}>
    {children}
  </Link>
);
const StyledLink = styled(LinkObject)`
  font-size: 4.5vw;
  line-height: 150%;
  font-family: "Josefin Sans", Helvetica, sans-serif;
  color: ${(props) => props.theme.colorText};
  text-decoration: none;
  transition: 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    color: transparent;
    -webkit-text-stroke: 1px ${(props) => props.theme.colorTheme};
  }
  @media screen and (max-width: 1920px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0px;
    font-size: var(--size-large);
    line-height: 150%;
  }
`;
const CheckCurrentPage = ({ value }) => {
  const location = useLocation();
  if (location.pathname === value.link) {
    return (
      <StyledLinkDiv>
        <LinkDivWrapper value={value} />
      </StyledLinkDiv>
    );
  } else {
    return (
      <StyledLink link={value.link} aria-label={value.link}>
        <LinkDivWrapper value={value} />
      </StyledLink>
    );
  }
};

const StyledNumber = styled.div`
  float: left;
  font-size: var(--size-medium);
  transform: rotate(270deg);
`;
const StyledRow = styled.div``;
const StyledWrapper = styled.div`
  pointer-events: "${(props) => (props.menuDisplay ? "auto" : "none")}";
  overflow: auto;
  height: 100%;
  overflow-x: hidden;
`;

const MenuText = () => {
  const menuDisplay = useSelector(selectMenuDisplay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <StyledWrapper menuDisplay={menuDisplay}>
      {menuData.map((value) => (
        <StyledRow key={value.link}>
          <CheckCurrentPage value={value} />
        </StyledRow>
      ))}
    </StyledWrapper>
  );
};

export default MenuText;
