import React, { useContext } from "react";
import useJsonFetch from "../customXooks/useJsonFetch";
import { UrlCont } from "../SecondTask";

function Loading() {
  const url = useContext(UrlCont);
  // eslint-disable-next-line
  const [_data, loading] = useJsonFetch(`${url.url}:${url.port}/loading`);

  return <div>{loading && <p>Loading....</p>}</div>;
}

export default Loading;
