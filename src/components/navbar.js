import React from "react";

function Navbar(props) {
  return (
    <div>
      <button onClick={() => props.setCurrentPage("About")}>AboutMe</button>
      <button onClick={() => props.setCurrentPage("Portfolio")}>
        Portfolio
      </button>
    </div>
  );
}

export default Navbar;
