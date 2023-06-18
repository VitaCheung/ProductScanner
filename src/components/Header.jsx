import {Link} from "react-router-dom"
// import Nav from "./Nav";

export default function Header() {
    return (
        <header id="header">
            <h2 id="site-name">
                <Link to="/"><img src="/logo.png" alt="logo" height="60"></img> </Link>
            </h2>
        </header>
    );
}