import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import { getAllPastryAction } from "../redux/actions";
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

function SweetsList ({pastry, getAllPastry}) {
  useEffect(() => {
    getAllPastry();
  }, [getAllPastry]);

  return(
    <List>
      {
        pastry.length
        ? pastry.map(sweet => {
          return <SweetItem key={sweet.id} {...sweet} />
        })
        : <ClearList>Sweets out of stock</ClearList>
      }
    </List>
  );
}

const mapStateToProps = state => ({
  pastry: state.pastry
});

const mapDispatchToProps = {
  getAllPastry: getAllPastryAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetsList);