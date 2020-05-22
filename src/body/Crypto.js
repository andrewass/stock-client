import React from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch";
import SymbolList from "./SymbolList";

const TRENDING_CRYPTO_SYMBOL_URL = "http://localhost:8080/crypto/trending-crypto-candles?count=10&days=365";


class Crypto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbols: []
        };
        this.setSymbols = this.setSymbols.bind(this)
    }

    componentDidMount() {
        console.log("crypto did mount");
        axios.get(TRENDING_CRYPTO_SYMBOL_URL)
            .then((response) => this.setSymbols(response.data)
                , (error) => alert(error));
    }

    setSymbols(symbols) {
        this.setState({symbols: symbols})
    }

    render() {
        return (
            <div className="crypto">
                <SymbolSearch updateSymbols={this.setSymbols}/>
                <SymbolList symbols={this.state.symbols}/>
            </div>
        );
    }
}

export default Crypto;
