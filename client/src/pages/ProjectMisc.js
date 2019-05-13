import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import Skew from 'components/Skew';
import GetMiscProjects from 'components/services/GetMiscProjects';
import Banner from 'components/Banner';
import {
  selectImagesProjects,
} from 'reducers';

const ProjectMisc = ({miscProjects, toggleMenu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div className="project_wrapper" tabIndex="0">
      <Skew>
        <GetMiscProjects/>
        <Banner
          line1="Misc Projects"
        />
        <div className="project_body">
          <div className="misc_wrap">
            {miscProjects && miscProjects.map((value, key) => (
              <div className="misc_image__container" key={key}>
                <div className="misc_title">
                  {value.value.name}
                </div>
                <a
                  href={value.value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={value.value.name}
                >
                  <img src={value.value.url} alt="" className="misc_image"/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Skew>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    miscProjects: selectImagesProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(menuActions.toggleMenu(false));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ProjectMisc);
