import React from "react";
import styled from "styled-components";
import SweetsList from "../components/SweetsList";

const Container = styled.div`
  max-width: 875px;
  padding: 0 25px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 0 28px;
  font-size: 28px;
`;

function Main () {
  return(
    <div>
      <Container className="container">
        <Title>Avaliable sweets</Title>
        <SweetsList/>
      </Container>
    </div>
  );
}

export default Main;