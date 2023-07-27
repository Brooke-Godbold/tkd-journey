import "./footer.styles.css";

import Logo from "../../img/tkd-logo.png";

import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "../icon/icon.component";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#">
        <img className="logo" src={Logo} alt="" />
      </a>
      <div className="social-links">
        <a href="#">
          <IconFacebook size={"48"} color={"#444"} />
        </a>
        <a href="#">
          <IconInstagram size={"48"} color={"#444"} />
        </a>
        <a href="#">
          <IconTwitter size={"48"} color={"#444"} />
        </a>
      </div>
    </footer>
  );
}
