import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Symbol from "../Symbol";


let container = null;

const symbol = {
        description: "APPLE",
        exchange: {
            currency : "USD"
        }
};

const candles = [{closingPrice: 310.13}];


beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


it("renders ok", () => {
    act(() => {
        render(< Symbol symbol={symbol} candles={candles}/>, container);
    })
})


