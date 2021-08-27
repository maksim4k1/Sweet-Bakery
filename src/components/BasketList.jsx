import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import BasketItem from "./BasketItem";

const List = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("29px")}
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 36px 0 17px;
  background: var(--main-white);
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`;

function BasketList ({basket, total}) {
  return(
    <div>
      <List>
        {
          basket.map(({id, name, inStock, cost}) => {
            return <BasketItem key={id} name={name} inStock={inStock} cost={cost} />
          })
        }
      </List>
      <Line/>
      <Total>
        <span>Total:</span>
        <span>$ {total}</span>
      </Total>
    </div>
  );
}

const mapStateToProps = state => ({
  basket: state.basket.basket,
  total: state.basket.total
});

export default connect(mapStateToProps)(BasketList);