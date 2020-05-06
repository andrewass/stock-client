import React from "react";
import Symbol from "../entity/Symbol";


const SymbolList = (props) => {

    const {symbols} = props

    return (
        <div className="symbolList">
            {symbols.map((symbol) =>
                <Symbol candles={symbol.candles} symbol={symbol.symbol}/>)}
        </div>
    )
}

export default SymbolList