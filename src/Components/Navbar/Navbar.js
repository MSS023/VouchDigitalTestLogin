import Button from "../Button/Button";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ATools.
          </a>
          <div className="navbarButtons">
            <Button>Start Free Trial</Button>
            <Button>Login</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
