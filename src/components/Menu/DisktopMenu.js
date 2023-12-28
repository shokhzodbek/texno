import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./DisktopMenu.css";
import menu from "./data.json";

function DisktopMenu() {
  const [menuId, setId] = useState(1);
  return (
    <div className="disktop-menu-container">
      <div className="disktop-menu">
        <div className="disktop-menu-left">
          <ul>
            {menu.map((item) => (
              <li
                id={item.id}
                onMouseOver={() => setId(item.id)}
                className={`${item.id === menuId ? "li-hover" : ""}`}
              >
                <div>
                  <img src={item.icon} alt="" />
                  <span>{item.name}</span>
                </div>
                <MdArrowForwardIos className="menu-icon" />
              </li>
            ))}
          </ul>
        </div>
        <div className="disktop-menu-right">
          <h2>{menu[menuId - 1].name}</h2>
          <div className="menu-right-container">
            {menu[menuId - 1]["submenu"].map((item) => (
              <div className="menu-item">
                <p>{item.name}</p>
                <ul>
                  {item?.submenu?.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisktopMenu;
