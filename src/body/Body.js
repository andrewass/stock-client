import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Stocks from "./Stocks";
import Currency from "./Currency";
import Crypto from "./Crypto";
import Navigation from "./Navigation";

class Body extends React.Component {

    render() {
        return (
            <Router>
                <Navigation/>
                <div className="body">
                    <Switch>
                        <Route path="/currency" component={Currency}/>
                        <Route path="/crypto" component={Crypto}/>
                        <Route path="/stocks" component={Stocks}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Body