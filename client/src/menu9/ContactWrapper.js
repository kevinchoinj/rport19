import React from "react";
import ContactForm from "menu9/ContactForm";
import { useDispatch } from "react-redux";
import { postContact } from "reducers/contact";
import styled from "styled-components";

const StyledWrapper = styled.div`
  @media screen and (max-height: 520px) {
    display: none;
  }
`;

const Contact = () => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <ContactForm onSubmit={(data) => dispatch(postContact(data))} />
    </StyledWrapper>
  );
};

export default Contact;
