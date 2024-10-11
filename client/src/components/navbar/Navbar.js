import { useState } from "react";
import "./navbar.scss";

function Navbar() {

  const [open, setOpen] = useState(false)


  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo.png" alt="logo" />
          <span>F-Estate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div class="right">
        <a href="/">Sign-in</a>
        <a href="/" className="signup">
          Sign-up
        </a>
      </div>
      <div className="menuIcon">
        <img src="menu.png" alt="menu" onClick={() => setOpen(!open)}/>
      </div>
      <div className={open? "menu active" : "menu"}>
      <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
        <a href="/">Sign-in</a>
        <a href="/">Sign-up</a>
      </div>
    </nav>
  );
}

export default Navbar;
