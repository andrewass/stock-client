import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <nav>
            <ul className="navLinks">
                <Link to="/stocks">
                    <li>Stocks</li>
                </Link>
                <Link to="/currency">
                    <li>Currency</li>
                </Link>
                <Link to="/crypto">
                    <li>Crypto</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;