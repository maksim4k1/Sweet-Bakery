import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import { getAllPastryAction } from "../redux/actions";
import EditSweetItem from "./EditSweetItem";
import ClearList from "./ClearList";

const List = styled.ul`
  margin: 0 0 36px;
  display: flex;
  flex-flow: column;
  ${gap("7px")}
`;

function EditSweets ({pastry, getAllPastry}) {
  useEffect(() => {
    getAllPastry();
  }, [getAllPastry]);

  return(
    <List>
      {
        pastry.length
        ? pastry.map(({id, name, inStock, cost}) => {
          return <EditSweetItem key={id} id={id} name={name} inStock={inStock} cost={cost} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditSweets);