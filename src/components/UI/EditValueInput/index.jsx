import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 202px;
  height: 30px;
  padding: 4px 9px;
  background: var(--main-white);
  border: 1px solid var(--main-purple);
`;

function EditValueInput (props) {
  return(
    <Input {...props}/>
  );
}

export default EditValueInput;