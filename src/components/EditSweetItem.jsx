import React from "react";
import styled from "styled-components";
import editIcon from "../assets/svg/edit.svg";
import addIcon from "../assets/svg/plus.svg";
import removeIcon from "../assets/svg/minus.svg";
import deleteIcon from "../assets/svg/delete.svg";

const Item = styled.li`
  width: 100%;
  height: 62px;
  padding: 0 19px 0 35px;
  display: flex;
  align-items: center;
  font-size: 18px;
  background: var(--main-bg-grey);
`;
const Name = styled.h3`
  width: 45%;
  display: flex;
  align-items: center;
  &>button{
    margin: 0 0 0 20px;
  }
`;
const Button = styled.button`
  width: 24px;
  height: 24px;
`;
const Info = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const PriceValue = styled.h5`
  margin: 0 0 0 16px;
  font-size: 18px;
  &>button{
    margin: 0 0 0 18px;
  }
`;
const InStockValue = styled.h5`
  width: 75px;
  display: flex;
  margin: 0 48px 0 17px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

function EditSweetsItem ({id, name, inStock, cost}) {
  return(
    <Item>
      <Name>
        {name}
        <Button><img src={editIcon} alt="Edit" /></Button>
      </Name>
      <Info>
        price:
        <PriceValue>
          $ {cost}
          <Button><img src={editIcon} alt="Edit" /></Button>
        </PriceValue>
      </Info>
      <Info>
        in stock:
        <InStockValue>
          <Button><img src={removeIcon} alt="Remove" /></Button>
          {inStock}
          <Button><img src={addIcon} alt="Add" /></Button>
        </InStockValue>
      </Info>
      <Button><img src={deleteIcon} alt="Delete" /></Button>
    </Item>
  );
}

export default EditSweetsItem;