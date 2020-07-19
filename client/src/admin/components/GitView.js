import React from 'react';
import {connect} from 'react-redux';
import {formatDistanceToNow} from 'date-fns';
import styled from 'styled-components';
import {
  selectGitCommits,
} from 'reducers';

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colorAdminContainer};
  box-shadow: ${props => props.theme.shadowAdmin};
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
              {formatDistanceToNow(new Date(value.commit.author.date), { addSuffix: true })}
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
