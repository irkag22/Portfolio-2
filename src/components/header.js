import React from "react";
import Navbar from "./navbar";

function Header(props) {
  return (
    <div>
      <Navbar setCurrentPage={props.setCurrentPage} />
    </div>
  );
}

export default Header;
