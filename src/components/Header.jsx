import {Link} from "react-router-dom"
// import Nav from "./Nav";

export default function Header() {
    return (
        <header id="header">
            <h2 id="site-name">
                <Link to="/">Product Scanner </Link>
            </h2>
        </header>
    );
}