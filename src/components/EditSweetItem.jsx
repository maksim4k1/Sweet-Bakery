import React from "react";
import styled from "styled-components";
import editIcon from "../assets/svg/edit.svg";
import addIcon from "../assets/svg/plus.svg";
import removeIcon from "../assets/svg/minus.svg";
import deleteIcon from "../assets/svg/delete.svg";
import saveIcon from "../assets/svg/save.svg";
import { connect } from "react-redux";
import { editPastryValueAction, getPastryValueAction, setPastryValueAction, deletePastryAction } from "../redux/actions/actions";
import EditValueInput from "./UI/EditValueInput";

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

function EditSweetsItem ({id, name, inStock, cost, getValue, setValue, changedValue, changedInput, editValue, deletePasty}) {
  function setValueToInput(type){
    getValue(id, type);
  }
  function editPastryValue(value, type){
    editValue(id, type, value);
  }
  function deleteItem() {
    deletePasty(id);
  }
  function InputHandler(event){
    setValue(event.target.value);
  }

  return(
    <Item>
      {
        changedInput.type === "name" && changedInput.id === id
        ? <Name>
          <EditValueInput type="text" value={changedValue ? changedValue : ""} onChange={InputHandler}/>
          <Button onClick={() => editPastryValue(changedValue, changedInput.type)}><img src={saveIcon} alt="Save" /></Button>
        </Name>
        : <Name>
          {name}
          <Button onClick={() => setValueToInput("name")}><img src={editIcon} alt="Edit" /></Button>
        </Name>
      }
      <Info>
        price:
        {
        changedInput.type === "cost" && changedInput.id === id
        ? <PriceValue>
          <EditValueInput type="number" value={changedValue} onChange={InputHandler} style={{width: "70px"}}/>
          <Button onClick={() => editPastryValue(changedValue, changedInput.type)}><img src={saveIcon} alt="Save" /></Button>
        </PriceValue>
        : <PriceValue>
          $ {cost}
          <Button onClick={() => setValueToInput("cost")}><img src={editIcon} alt="Edit" /></Button>
        </PriceValue>
      }
      </Info>
      <Info>
        in stock:
        <InStockValue>
          <Button onClick={() => editPastryValue(inStock - 1, "inStock")}><img src={removeIcon} alt="Remove" /></Button>
          {inStock}
          <Button onClick={() => editPastryValue(inStock + 1, "inStock")}><img src={addIcon} alt="Add" /></Button>
        </InStockValue>
      </Info>
      <Button onClick={deleteItem}><img src={deleteIcon} alt="Delete" /></Button>
    </Item>
  );
}

const mapStateToProps = state => ({
  changedValue: state.editPastry.changedValue,
  changedInput: state.editPastry.changedInput,
});

const mapDispatchToProps = {
  getValue: getPastryValueAction,
  setValue: setPastryValueAction,
  editValue: editPastryValueAction,
  deletePasty: deletePastryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSweetsItem);