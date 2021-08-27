import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins"

const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;
const ErrorTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;
const ErrorBody = styled.h1`
  font-size: 20px;
  & a{
    color: var(--main-blue);
    font-weight: 700;
    &:hover{
      text-decoration: underline;
    }
  }
`;

function Error({errorCode, body}) {
  return(
    <Container>
      <ErrorTitle>{errorCode} error</ErrorTitle>
      <ErrorBody><b>Error:</b> {body()}</ErrorBody>
    </Container>
  );
}

export default Error;