import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import {
  selectGitCommits,
} from 'reducers';

const StyledWrapper = styled.div`
  display: flex;
  background-color: var(--admin-container-color);
  box-shadow: var(--shadow-box);
  max-width: 100vw;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  margin-top: 1rem;
`;
const StyledObject = styled.div`
  font-size: .8rem;
  margin: .5rem 0;
`;

const GitView = ({commits}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        {commits && commits.map((value) => {
          return (
            <StyledObject key={value.commit.author.date}>
              {value.author.login}
              <br/>
              {moment(value.commit.author.date).fromNow()}
              <br/>
              {value.commit.message}
            </StyledObject>
          );
        })
        }
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    commits: selectGitCommits(state),
  };
};

export default connect (mapStateToProps, null)(GitView);
