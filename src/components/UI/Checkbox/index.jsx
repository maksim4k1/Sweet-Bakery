import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import checkedIcon from "../../../assets/svg/check.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${gap("15px")}
`;
const Label = styled.label`
  width: 20px;
  height: 20px;
  position: relative;
  background: var(--main-white);
  border: 1px solid var(--main-border-grey);
  cursor: pointer;
`;
const CheckboxElement = styled.input`
  display: none;
  &:checked+label{
    background: var(--main-purple);
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14px;
  }
`;

function Checkbox ({id, name, checked, toggleCheckbox, title}) {
  return(
    <Container>
      <h5>{title}</h5>
      <CheckboxElement id={id} name={name} type="checkbox" checked={checked} onChange={toggleCheckbox}/>
      <Label htmlFor={id}></Label>
    </Container>
  );
}

export default Checkbox;