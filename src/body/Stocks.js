import React from "react";
import axios from "axios";
import SymbolList from "./SymbolList";
import SymbolSearch from "./SymbolSearch";

const TRENDING_STOCK_SYMBOL_URL = "http://localhost:8080/stock/trending-stock-candles?count=10&days=100";

class Stocks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbols: []
        };
        this.setSymbols = this.setSymbols.bind(this);
    }

    componentDidMount() {
        axios.get(TRENDING_STOCK_SYMBOL_URL)
            .then((response) => this.setSymbols(response.data)
                , (error) => console.log(error));
    }

    setSymbols(symbols) {
        this.setState({symbols: symbols});
    }

    render() {
        return (
            <div className="stocks">
                <SymbolSearch updateSymbols={this.setSymbols}/>
                <SymbolList symbols={this.state.symbols}/>
            </div>
        );
    }
}

export default Stocks;
