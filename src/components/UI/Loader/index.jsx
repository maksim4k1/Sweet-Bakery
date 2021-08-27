import React from "react";
import { connect } from "react-redux";
import style from "./Loader.module.scss";

function Loader ({loader}) {
  return(
    <div className={style.loader} style={loader ? {display: "block"} : {display: "none"}}></div>
  );
}

const mapStateToProps = state => ({
  loader: state.app.loader
});

export default connect(mapStateToProps)(Loader);