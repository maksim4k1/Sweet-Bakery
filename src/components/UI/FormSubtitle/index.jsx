import React from "react";
import styled from "styled-components";

const Subtitle = styled.h6`
  margin: 15px 0 -4px;
`;

function FormSubtitle (props) {
  return(
    <Subtitle>
      {props.children}
    </Subtitle>
  );
}

export default FormSubtitle;