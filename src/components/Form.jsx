import React from "react";
import styled from "styled-components";
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

function Form ({title, formData}) {
  return(
    <FormElement>
      <Title>{title}</Title>
      {
        formData && formData.length
        ? formData.map(element => {
          if(element.elementType === "input"){
            return <Input key={element.id} {...element}/>
          } else if(element.elementType === "checkbox"){
            return <Checkbox key={element.id} title={element.title} checked={element.checked} toggleCheckbox={() => {}}/>
          } else if(element.elementType === "subtitle"){
            return <FormSubtitle key={element.id}>{element.title}</FormSubtitle>
          }
          return "";
        })
        : ""
      }
      <Button type="submit" style={{marginTop: "20px"}}>Add new item</Button>
    </FormElement>
  );
}

export default Form;