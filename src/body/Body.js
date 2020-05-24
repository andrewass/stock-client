import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Stocks from "./Stocks";
import Currency from "./Currency";
import Crypto from "./Crypto";
import Navigation from "./Navigation";
import styled from "styled-components";

const BodyBlock = styled.div`
`;

class Body extends React.Component {

    render() {
        return (
            <Router>
                <Navigation/>
                <BodyBlock>
                    <Switch>
                        <Route path="/currency" component={Currency}/>
                        <Route path="/crypto" component={Crypto}/>
                        <Route path="/stocks" component={Stocks}/>
                    </Switch>
                </BodyBlock>
            </Router>
        );
    }
}

export default Body