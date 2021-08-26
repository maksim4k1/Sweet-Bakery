import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import { container } from "../styles/mixins";
import EditSweets from "../components/EditSweets";
import Button from "../components/Button";

const Container = styled.div`
  ${container}
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