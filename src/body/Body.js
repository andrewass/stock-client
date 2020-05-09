import React from "react";
import SymbolList from "./SymbolList"
import SearchField from "./SearchField";
import axios from "axios";

const TRENDING_SYMBOL_URL = "http://localhost:8080/exchange/trending-stock-candles?count=10&days=365";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbols: []
        };
        this.setSymbols = this.setSymbols.bind(this)
    }

    componentDidMount() {
        axios.get(TRENDING_SYMBOL_URL)
            .then((response) => this.setSymbols(response.data)
                , (error) => alert(error));
    }

    setSymbols(symbols) {
        this.setState({symbols: symbols})
    }

    render() {
        return (
            <div className="body">
                <SearchField updateSymbols={this.setSymbols}/>
                <SymbolList symbols={this.state.symbols}/>
            </div>
        )
    }
}

export default Body