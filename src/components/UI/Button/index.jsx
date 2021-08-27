import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 257px;
  height: 56px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-white);
  font-size: 20px;
  background: var(--main-purple);
  transition: background 0.3s;
  &:hover{
    background: var(--main-dark-purple);
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;