import React from "react";
import axios from "axios";
import styled from "styled-components";
const SEARCH_SYMBOL_URL = "http://localhost:8080/common/stock-candles";
const WEEK = 7;

const SearchBlock = styled.div`
  width: 60%;
  margin: 0 20%;
  padding-top: 2%; 
`;

class SymbolSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol: "enter symbol name..."
        };
        this.submitSearch = this.submitSearch.bind(this);
        this.createUrlParams = this.createUrlParams.bind(this);
    }

    submitSearch() {
        console.log(axios.get(SEARCH_SYMBOL_URL, {params: this.createUrlParams()})
            .then((response) => this.props.updateSymbols(response.data)
                , (error) => console.log(error)));
    }

    createUrlParams() {
        const params = new URLSearchParams();
        params.append("days", WEEK);
        params.append("symbol", this.state.symbol);
        return params;
    }

    render() {
        const {searchValue} = this.state;
        return (
            <SearchBlock>
                <label>Symbol : </label>
                <input type="text" name="symbol" value={searchValue}
                       onChange={(event) => this.setState({symbol: event.target.value})}/>
                <button onClick={this.submitSearch}>Search</button>
            </SearchBlock>);
    }
}

export default SymbolSearch;