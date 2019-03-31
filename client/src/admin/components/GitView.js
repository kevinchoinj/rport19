import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class GitView extends Component {

  render() {

    const {
      commits,
    } = this.props;

    if (commits && (commits.length > 0)) {
      return (
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
      );
    }
    else return null;
  }
}



export default connect(
  (state) => ({
    commits: state.git.commits,
  }),
  dispatch => ({
  }),
)(GitView);
