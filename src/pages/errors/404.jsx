import React from "react";
import { Link } from "react-router-dom";
import Error from "../../components/UI/Error";
import { URL } from "../../routers/routers";

function Error404 () {
  return(
    <div>
      <Error
        errorCode="404"
        body={() => (
            <span>Page not found. Go to <Link to={`${URL}/`}>main page</Link></span>
          )
        }/>
    </div>
  );
}

export default Error404;