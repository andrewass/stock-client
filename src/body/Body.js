import React from "react";
import {Route, Switch} from "react-router-dom";
import Stocks from "./Stocks";
import Currency from "./Currency";
import Crypto from "./Crypto";
import SymbolDetails from "./SymbolDetails";

class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/currency" component={Currency}/>
                <Route path="/crypto" component={Crypto}/>
                <Route path="/stocks" component={Stocks}/>
                <Route path="/symboldetails" component={SymbolDetails} />
            </Switch>

        );
    }
}

export default Body