import React, { useContext } from "react";
import useJsonFetch from "../customXooks/useJsonFetch";
import { UrlCont } from "../SecondTask";

function Data() {
  const url = useContext(UrlCont);
  const [data] = useJsonFetch(`${url.url}:${url.port}/data`);
  return (
    <div className="Data">Данные Status : {data ? data.status : null}</div>
  );
}

export default Data;
