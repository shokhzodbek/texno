import React from "react";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";
function index() {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  );
}

export default index;
