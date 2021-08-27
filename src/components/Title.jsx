import React from "react";
import styled from "styled-components";

const TitleElement = styled.h1`
  text-align: center;
  margin: 0 0 28px;
  font-size: 28px;
`;

function Title () {
  return(
    <TitleElement>Avaliable sweets</TitleElement>
  );
}

export default Title;