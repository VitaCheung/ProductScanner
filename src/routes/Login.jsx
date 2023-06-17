import {useState, useEffect}  from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Login() {
    const [showform, setShowform] = useState(false);

    function setter(){
        setShowform(true);
        document.getElementById("reg_btn").style.display = "none";
    }
    let loginForm = <LoginForm />;
    let RegForm = <div></div>;
    if (showform) {
        RegForm = <RegisterForm />;
        loginForm = <div></div>;
    }

    return (
        <main id="main">
            <div id="login">
                {loginForm}
                <button type="submit" id="reg_btn" onClick={setter}>Register</button>
                {RegForm}
            </div>
        </main>
    );
}