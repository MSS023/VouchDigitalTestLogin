import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar";
import "./LoginPage.css";

function LoginPage(props) {
  return (
    <div className="Login">
      <Navbar />
      <section className="bottom">
        <div className="Left">
          <LoginForm />
        </div>
        <div className="Right">
          <div className="SideImage" />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
