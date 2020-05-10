import React from "react";

const WEEK = 7;
const MONTH = 30;
const YEAR = 365;
const YEAR_5 = 5*YEAR;

const getPriceChange = (daysAgo, currentPrice, candles) => {
    let lastCandle = candles.length-1;
    let timeMap = new Map();
    timeMap.set(WEEK, "week");
    timeMap.set(MONTH, "month");
    timeMap.set(YEAR, "year");
    timeMap.set(YEAR_5, "5 years");

    let prevClosingPrice = candles[Math.min(lastCandle,daysAgo)].closingPrice

    return (
        <p>Change since last {timeMap.get(daysAgo)} : {}</p>
    )
};

const Symbol = ({symbol, candles}) => {
    let exchange = symbol.exchange;

    return (
        <div>
            <h2><b>{symbol.description}</b></h2>
            <p>Latest price : {candles[0].closingPrice} {exchange.currency}</p>
            {getPriceChange(WEEK, candles[0].closingPrice, candles)}
            {getPriceChange(MONTH, candles[0].closingPrice, candles)}
            {getPriceChange(YEAR, candles[0].closingPrice, candles)}
            {getPriceChange(YEAR_5, candles[0].closingPrice, candles)}
        </div>)
};

export default Symbol