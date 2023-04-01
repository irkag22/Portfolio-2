import React from "react";

function Navbar(props) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-warning"
        onClick={() => props.setCurrentPage("About")}
      >
        AboutMe
      </button>
      ;
      <button onClick={() => props.setCurrentPage("Portfolio")}>
        Portfolio
      </button>
      ;<button onClick={() => props.setCurrentPage("Resume")}>Resume</button>;
      <button onClick={() => props.setCurrentPage("Contact")}>Contact</button>
    </div>
  );
}

export default Navbar;
