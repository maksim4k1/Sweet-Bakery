import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Info = styled.div`
  max-width: 150px;
`;
const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

function BasketItem ({name, inStock, cost}) {
  return(
    <Item>
      <Info>
        {name}
        <br/>
        {inStock} items
      </Info>
      <Price>
        $ {cost}
      </Price>
    </Item>
  );
}

export default BasketItem;