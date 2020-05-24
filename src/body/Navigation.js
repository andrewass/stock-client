import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  border-bottom-style: solid;
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
  
  .navLinks{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 35vw;
    list-style: none;
  }
  
  .authLinks{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 15vw;
    list-style: none;
  }
  
  .link{
    color:black;
    text-decoration: none;
    font-size: 1.5vh;
  }
  
  .logo{
    font-size: 3vh;
    font-weight: bold;
  }
`;

const Navigation = () => {
    return (
        <NavigationBar>
            <div className="logo">Stock Client</div>
            <ul className="navLinks">
                <li>
                    <Link to="/stocks" className="link">Stocks</Link>
                </li>
                <li>
                    <Link to="/currency" className="link">Currency</Link>
                </li>
                <li>
                    <Link to="/crypto" className="link">Crypto</Link>
                </li>
            </ul>
            <ul className="authLinks">
                <li>
                    <Link to="/stocks" className="link">Sign In</Link>
                </li>
                <li>
                    <Link to="/currency" className="link">Sign Up</Link>
                </li>
            </ul>
        </NavigationBar>
    );
};

export default Navigation;