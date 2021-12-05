import React, { useState } from "react";
import Data from "./Data/Data";
import Error from "./Error/Error";
import Loading from "./Loading/Loading";

export const UrlCont = React.createContext();

function SecondTask() {
  // eslint-disable-next-line
  const [url, setUrl] = useState({
    url: "https://reacthookandcontecst.herokuapp.com",
    port: "",
  });

  return (
    <UrlCont.Provider value={url}>
      <Data />
      <Error />
      <Loading />
    </UrlCont.Provider>
  );
}

export default SecondTask;
