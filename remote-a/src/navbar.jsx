import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <li>Host</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <li>Remote A</li>
        <li>
          <Link to="/remoteA">Home</Link>
        </li>
        <li>
          <Link to="/remoteA/about">About</Link>
        </li>
        <li>
          <Link to="/remoteA/contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <li>Remote B</li>
        <li>
          <Link to="/remoteB">Home</Link>
        </li>
        <li>
          <Link to="/remoteB/about">About</Link>
        </li>
        <li>
          <Link to="/remoteB/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
