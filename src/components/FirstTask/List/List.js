import React, { useEffect, useState, useContext } from "react";
import "./desktop.scss";
import { ActiveI } from "../FirstTask";

const List = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [active, setActive] = useContext(ActiveI);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const respData = await response.json();
        setData(respData);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setData([{ id: 1, name: "Произошла ошибка" }]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handelListItem = (id) => {
    setActive(id);
  };
  return (
    <div className="List">
      {loading && <p className="list-item ">Loading...</p>}
      <ul className="list-row">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => handelListItem(item.id)}
              className="list-item"
              style={
                active === item.id
                  ? { backgroundColor: "rgb(155, 155, 201)", color: "white" }
                  : null
              }
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
