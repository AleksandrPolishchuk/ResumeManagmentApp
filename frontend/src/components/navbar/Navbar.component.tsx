import "./navbar.scss";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";

const links = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "Companies" },
  { href: "/jobs", label: "Jobs" },
  { href: "/candidates", label: "Candidates" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <span>Resume Managment</span>
      </div>
      <div className="menu">
        <ul>
          {links.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger">
        <Menu />
      </div>
      <div className="toggle">
        <ToggleButton value={"check"}></ToggleButton>
      </div>
    </div>
  );
};

export default Navbar;
