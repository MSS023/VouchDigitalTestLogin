import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar";
import "./LoginPage.css";

function LoginPage(props) {
    return <div className="Login">
        <Navbar />
        <section className="bottom">
            <LoginForm />
            <div className="SideImage" />
        </section>
    </div>;
}

export default LoginPage;