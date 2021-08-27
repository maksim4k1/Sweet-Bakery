import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import { getAllPastryAction } from "../redux/actions/actions";
import SweetItem from "./SweetItem";
import ClearList from "./ClearList";

const List = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  ${gap("26px", "28px")}
`;

function SweetsList ({pastry, getAllPastry}) {
  useEffect(() => {
    getAllPastry();
  }, [getAllPastry, pastry]);

  return(
    <List>
      {
        pastry.length
        ? pastry.map(sweet => {
          return <SweetItem key={sweet.id} {...sweet} />
        })
        : <ClearList/>
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