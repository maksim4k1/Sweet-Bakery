import React from "react";
import SweetsList from "../components/SweetsList";
import Title from "../components/Title";
import Loader from "../components/UI/Loader";

function Main () {
  return(
    <div>
      <Title/>
      <SweetsList/>
      <Loader/>
    </div>
  );
}

export default Main;