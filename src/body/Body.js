import React from "react";
import SymbolList from "../entity/SymbolList"
export default class Body extends React.Component {


    render() {
        return (
            <div className="body">
                <SymbolList />
            </div>
        );
    }
}