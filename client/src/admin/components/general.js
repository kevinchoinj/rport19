import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.div`
  font-size: 36px;
  padding: 16px;
  font-size: 12px;
  font-weight: 700;
`;

const StyledLabelWrapper = styled.div`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 6px;
  margin-top: 12px;
`;

export const Label = ({label}) => {
  return (
    <StyledLabelWrapper>
      <label htmlFor={label}>
        {label}
      </label>
    </StyledLabelWrapper>
  )
}