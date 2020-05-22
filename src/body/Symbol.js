import React from "react";
import "../body/style/body.css";
import styled from "styled-components";

const PriceChange = styled.label`
  color: ${props => Math.sign(props.children) < 0 ? 'red' : 'green'};
`;

const SymbolBlock = styled.div`
`;

const priceDifference = (currentPrice, previousPrice) => {
    let priceDiff = currentPrice - previousPrice;
    return <PriceChange>{priceDiff.toFixed(2)}</PriceChange>;
}

const Symbol = ({symbol, candles}) => {
    let exchange = symbol.exchange;
    let lastCandle = candles.length - 1;
    let currentPrice = candles[0].closingPrice;
    let previousPrice = candles[lastCandle].closingPrice
    return (
        <SymbolBlock>
            <h2><b>{symbol.description} ({symbol.symbol})</b></h2>
            <h4><b>{exchange.exchangeName} ({exchange.code})</b></h4>
            <p>Latest price : {candles[0].closingPrice} {exchange.currency}</p>
            <p>Since last week : {priceDifference(currentPrice, previousPrice)} {exchange.currency}</p>
        </SymbolBlock>)
};

export default Symbol