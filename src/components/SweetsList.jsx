import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import SweetItem from "./SweetItem";

const List = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  ${gap("26px", "28px")}
`;

const ClearList = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

function SweetsList ({sweets}) {
  return(
    <List>
      {
        sweets
        ? sweets.map(sweet => {
          return <SweetItem key={sweet.id} {...sweet} />
        })
        : <ClearList>Sweets out of stock</ClearList>
      }
    </List>
  );
}

export default SweetsList;