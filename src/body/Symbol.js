import React from "react";

const getPriceChange = (daysAgo, currentPrice, candles) => {
    let timeMap = new Map()
    timeMap.set(7, "week")
    timeMap.set(30, "month")
    timeMap.set(365, "year")

    return(
        <p>Change in 1 {timeMap.get(daysAgo) }</p>
    )
}

const Symbol = ({symbol, candles} ) => {
    let exchange = symbol.exchange

    return (
        <div>
            <h2><b>{symbol.description}</b></h2>
            <p>Latest price : {candles[0].closingPrice} {exchange.currency}</p>
            {getPriceChange(7, candles[0].closingPrice, candles)}
            {getPriceChange(30, candles[0].closingPrice, candles)}
            {getPriceChange(365, candles[0].closingPrice, candles)}
        </div>)
};

export default Symbol