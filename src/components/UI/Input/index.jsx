import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  padding: 6px 10px;
  background: var(--main-white);
  border: 1px solid var(--main-border-grey);
`;

function Input (props) {
  return(
    <InputElement {...props}/>
  );
}

export default Input;