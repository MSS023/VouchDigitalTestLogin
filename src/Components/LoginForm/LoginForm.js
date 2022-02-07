import Button from "../Button/Button";
import "./LoginForm.css";

function LoginForm(props) {
  return (
    <div className="LoginForm">
      <h1 className="Heading">Welcome Back</h1>
      <h2 className="SubHeading">Sub-title test goes here</h2>
      <input type="text" className="email" placeholder="Email Address *" />
      <input type="password" className="password" placeholder="Password *" />
      <Button className="w-100 btn btn-lg btn-primary">Login</Button>
      <div className="subform">
          <input id="remPass" type="checkbox" className="check" />
          <label for="remPass">Remember Password</label>
          <a href="#" className="forgot">Forgot Password?</a>
      </div>
    </div>
  );
}

export default LoginForm;
