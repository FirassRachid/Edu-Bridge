import { FaArrowRight } from "react-icons/fa";

import "./header.css";
export function Header() {
  return (
    <header>
      <a className="title" href="#">
        EduBridge
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#courses">Pricing</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
      <div>
        <a href="#">Login</a>
        <a className="join-link" href="#joinus">
          JOIN US <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </header>
  );
}
