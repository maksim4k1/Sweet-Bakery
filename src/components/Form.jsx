import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { editInputValueAction, editCheckboxValueAction, addNewItemAction } from "../redux/actions/actions";
import { gap } from "../styles/mixins";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import FormSubtitle from "./UI/FormSubtitle";
import Input from "./UI/Input";

const FormElement = styled.form`
  display: flex;
  flex-flow: column;
  ${gap("14px")}
`;
const Title = styled.h4`
  margin: 0 0 16px;
  font-size: 20px;
  text-align: center;
`;
const Error = styled.div`
  margin: 10px 0;
  color: var(--main-red);
  text-align: center;
`;

function Form ({title, formData, editValue, editCheckbox, addNewItem, error}) {
  function inputHandler(event){
    editValue(event.target.name, event.target.value);
  }
  function checkboxHandler(event){
    editCheckbox(event.target.name, event.target.checked);
  }
  function formHandler(event){
    event.preventDefault();
    const values = formData.map(item => {
      if(item.elementType === "input"){
        return {name: item.name, value: item.value};
      } else if(item.elementType === "checkbox"){
        return {name: item.name, value: item.checked};
      }
      return undefined;
    })
    addNewItem(values);
  }

  return(
    <FormElement onSubmit={formHandler}>
      <Title>{title}</Title>
      {
        formData && formData.length
        ? formData.map(element => {
          if(element.elementType === "input"){
            return <Input key={element.id} placeholder={element.placeholder} name={element.name} value={element.value} type={element.type} editInputValue={inputHandler}/>
          } else if(element.elementType === "checkbox"){
            return <Checkbox key={element.id} id={element.id} name={element.name} title={element.title} checked={element.checked} toggleCheckbox={checkboxHandler}/>
          } else if(element.elementType === "subtitle"){
            return <FormSubtitle key={element.id}>{element.title}</FormSubtitle>
          }
          return "";
        })
        : ""
      }
      <Error>{error}</Error>
      <Button type="submit">Add new item</Button>
    </FormElement>
  );
}

const mapStateToProps = state => ({
  formData: state.form.formData,
  error: state.form.formError,
});

const mapDispatchToProps = {
  editValue: editInputValueAction,
  editCheckbox: editCheckboxValueAction,
  addNewItem: addNewItemAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);