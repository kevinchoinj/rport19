import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectFormStatus,
} from 'reducers';

const StyledWrapper = styled.span`
  color:  ${props => props.theme.colorText};
`;

const FormSending = ({formStatus}) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (formStatus === "success") {
      setMessage('Form successfully sent')
    }
    else if (formStatus === "sending") {
      setMessage('Sending...')
    }
    else if (formStatus === "failure") {
      setMessage('Failed; Please try again later')
    }
    else {
      setMessage('')
    }
  }, [formStatus])
  return (
    <StyledWrapper>
      {message}
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    formStatus: selectFormStatus(state),
  };
};

export default connect (mapStateToProps, null)(FormSending);
