import React from "react";
import "../body/style/body.css";

const priceDifference = (currentPrice, previousPrice) => {
    let priceDiff = (currentPrice - previousPrice).toFixed(2);
    if(priceDiff < 0.00){
        return <label className="negativePrice">{priceDiff}</label>
    } else {
        return <label className="positivePrice">+{priceDiff}</label>
    }
}

const Symbol = ({symbol, candles}) => {
    let exchange = symbol.exchange;
    let lastCandle = candles.length-1;
    let currentPrice = candles[0].closingPrice;
    let previousPrice = candles[lastCandle].closingPrice
    return (
        <div>
            <h2><b>{symbol.description} ({symbol.symbol})</b></h2>
            <h4><b>{exchange.exchangeName} ({exchange.code})</b></h4>
            <p>Latest price : {candles[0].closingPrice} {exchange.currency}</p>
            <p>Change since last week : {priceDifference(currentPrice, previousPrice)}</p>
        </div>)
};

export default Symbol