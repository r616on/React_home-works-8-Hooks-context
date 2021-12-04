import React, { useState } from "react";
import "./desktop.scss";
import List from "./List/List";
import Details from "./Details/Details";

export const ActiveI = React.createContext();

export default function FirstTask() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ActiveI.Provider value={[activeItem, setActiveItem]}>
      <div className="FirstTask">
        <div className="FirstTask-row">
          <div className="left">
            <List />
          </div>
          <div className="right">
            <Details />
          </div>
        </div>
      </div>
    </ActiveI.Provider>
  );
}
