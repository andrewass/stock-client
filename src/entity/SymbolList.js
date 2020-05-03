import React from "react";
import axios from "axios";

const TRENDING_SYMBOL_URL = "http://localhost:8080/exchange/trending-stock-candles?count=10&days=10";

class SymbolList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbols: []
        }
    }

    componentDidMount() {
        axios.get(TRENDING_SYMBOL_URL)
            .then((response) => this.setState({symbols: response.data})
                , (error) => alert(error));
    }

    render() {
        return (
            <div>
                <h1>SYMBOLLIST</h1>
            </div>
        )
    }
}


export default SymbolList