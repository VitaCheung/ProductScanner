import {useState, useEffect}  from "react";
// import Logins from "../components/Logins";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Login() {
    const [showform, setShowform] = useState(false);
    // const [password, setPassword] = useState("");
    // const [remember, setRemember] = useState(false);

    function setter(){
        setShowform(true);
    }
    let RegForm = <div></div>;
    if (showform) {
        RegForm = <RegisterForm />;
    }

    return (
        <main id="main">
            <div id="login">
                <h2>Login</h2>
                <LoginForm />
                <button type="submit" onClick={setter}>Register</button>
                {RegForm}
        
            </div>
        </main>
    );
}