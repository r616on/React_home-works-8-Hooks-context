import React, { useContext } from "react";
import useJsonFetch from "../customXooks/useJsonFetch";
import { UrlCont } from "../SecondTask";

function Error() {
  const url = useContext(UrlCont);
  // eslint-disable-next-line
  const [_data, _loading, hasError] = useJsonFetch(
    `${url.url}:${url.port}/error`
  );
  return (
    <div className="Error">{hasError && <p>Ой что то пошло не так</p>}</div>
  );
}

export default Error;
