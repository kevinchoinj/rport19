import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectFormStatus,
} from 'reducers';

const StyledWrapper = styled.span`
  color:  ${props => props.theme.colorText};
`;

const FormSending = ({formStatus}) => {
  const message = useMemo(() => {
    if (formStatus === 'success') {
      return 'Form successfully sent';
    } else if (formStatus === 'sending') {
      return 'Sending...';
    } else if (formStatus === 'failure') {
      return 'Failed; Please try again later';
    } else if (formStatus === 'validate') {
      return 'Enter a message to send.';
    } else {
      return '';
    }
  }, [formStatus]);
  return (
    <StyledWrapper>
      {message}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    formStatus: selectFormStatus(state),
  };
};

export default connect(mapStateToProps, null)(FormSending);
