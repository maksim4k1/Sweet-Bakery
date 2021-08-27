import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import EditSweets from "../components/EditSweets";
import Button from "../components/UI/Button";

const Container = styled.div`
  padding-bottom: 100px;
`;

function Admin () {
  return(
    <Container>
      <Title/>
      <EditSweets/>
      <Button>
        Add new shop item
      </Button>
    </Container>
  );
}

export default Admin;