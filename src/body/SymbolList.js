import React from "react";
import Symbol from "../entity/Symbol";


const SymbolList = (props) => {

    const {symbols} = props;

    const symbolList = symbols.map((symbol) => {
        return (<Symbol candles={symbol.candles} symbol={symbol.symbol}/>)
    });

    return (
        <div>{symbolList}</div>
    )
};

export default SymbolList;