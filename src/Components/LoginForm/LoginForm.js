import Button from "../Button/Button";
import "./LoginForm.css";

function LoginForm(props) {
  return (
    <div className="LoginForm">
      <h1 className="Heading">Welcome Back</h1>
      <h2 className="SubHeading">Sub-title text goes here</h2>
      <form className="row form">
        <div className="col-12 formElement">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Email Address *"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-12 formElement">
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Password *"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-12 formElement">
          <Button className="login form-control">Login</Button>
        </div>
      </form>
      <div className="subform">
        <div className="checkbox contain">
          <input id="remPass" type="checkbox" className="check" />
          <span className="checkmark" />
          <label for="remPass" className="checkLabel">Remember Password</label>
        </div>
        <div className="forgotContainer">
          <a href="/" className="forgot">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
