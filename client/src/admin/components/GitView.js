import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {
  selectGitCommits,
} from 'reducers';

const GitView = ({commits}) => {
  return (
    <div className="admin_container__flex">
      <div className="git__wrapper">
        {commits && commits.map((value, key) => {
          return (
            <div className="git__row" key={key}>
              {value.author.login}
              <br/>
              {moment(value.commit.author.date).fromNow()}
              <br/>
              {value.commit.message}
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    commits: selectGitCommits(state),
  };
};

export default connect (mapStateToProps, null)(GitView);
