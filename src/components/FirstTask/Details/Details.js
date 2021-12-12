import React, { useEffect, useState, useContext } from "react";
import "./desktop.scss";
import { ActiveI } from "../FirstTask";

const Details = (props) => {
  const [data, setData] = useState({});
  const [active] = useContext(ActiveI);
  const [id, setId] = useState();

  useEffect(() => {
    if (active > 0 && active !== id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${active}.json`
          );
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const respData = await response.json();
          setData(respData);
          setId(data.id);
        } catch (e) {
          console.error(e);
        } finally {
        }
      };
      fetchData();
    } else {
      return null;
    }
    // eslint-disable-next-line
  }, [active]);

  const { avatar, name, details } = data;
  console.log(data);
  const Image = ({ avatar }) => {
    return <img src={avatar} className="img " alt="img"></img>;
  };

  return (
    data && (
      <div id={id} className="Details">
        <Image avatar={avatar} />
        <div className="name details-item">{name}</div>
        <div className="city details-item">
          City: {details ? details.city : null}
        </div>
        <div className="company details-item">
          Company: {details ? details.company : null}
        </div>
        <div className="position details-item">
          Position: {details ? details.position : null}
        </div>
      </div>
    )
  );
};

export default Details;
