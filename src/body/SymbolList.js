import React from "react";
import Symbol from "./Symbol";

const SymbolList = ({symbols}) => {

    return (
        <div className="symbolList">
            {symbols.map((symbol) =>
                <Symbol candles={symbol.candles} symbol={symbol.symbol}/>)}
        </div>
    )
}

export default SymbolList