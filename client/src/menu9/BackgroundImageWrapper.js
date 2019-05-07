import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {menuData} from 'data/menuData';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';
import {
  selectMenuDisplay,
} from 'reducers';

const BackgroundImageWrapper = ({menuDisplay}) => {
  const wrapperName = classNames(
    'menu_background__wrapper',
    {
      'menu_background__wrapper--display': menuDisplay,
    }
  );
  return(
    <div className={wrapperName}>
      {menuData.map((value, index) => (
        <div key={index}>
          <BackgroundImageDisplay
            image={value.image}
            link={value.link}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(BackgroundImageWrapper);
