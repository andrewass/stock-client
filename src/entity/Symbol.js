import React from "react";

const Symbol = (props) => {

    let {symbol, candles} = props
    let exchange = symbol.exchange

    return (
        <div>
            <p>{symbol.description}</p>
            <p>{candles[0].candleDate} {candles[0].closingPrice} {exchange.currency}</p>
        </div>)
};


export default Symbol