import React from "react";
import styled from "styled-components";

const ClearListElement = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

function ClearList () {
  return(
    <ClearListElement>Sweets out of stock</ClearListElement>
  );
}

export default ClearList;