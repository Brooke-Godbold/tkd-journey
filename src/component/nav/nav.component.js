import "./nav.styles.css";

import Logo from "../../img/tkd-logo.png";

export default function Nav() {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" src={Logo} alt="" />
      </a>
      <nav className="nav">
        <a className="nav-link" href="#">
          Calendar
        </a>
        <a className="nav-link" href="#">
          Members
        </a>
      </nav>
    </header>
  );
}
