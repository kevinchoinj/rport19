import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

const GitView = ({commits}) => {
  return commits && commits.length > 0 ? (
    <div className="admin_container__flex">
      <div className="git__wrapper">
        {commits.length > 1 ? commits.map((value, key) => {
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
          :
          <div>
            {commits[0].author.login}
            <br/>
            {commits[0].commit.author.date}
            <br/>
            {commits[0].commit.message}
          </div>
        }
      </div>
    </div>
  ): null;
};

const mapStateToProps = (state) => {
  return {
    commits: state.git.commits,
  };
};

export default connect (mapStateToProps, null)(GitView);
