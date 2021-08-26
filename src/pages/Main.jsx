import React from "react";
import styled from "styled-components";
import SweetsList from "../components/SweetsList";
import Title from "../components/Title";
import { container } from "../styles/mixins";

const Container = styled.div`
  ${container}
`;

function Main () {
  return(
    <Container>
      <Title/>
      <SweetsList/>
    </Container>
  );
}

export default Main;