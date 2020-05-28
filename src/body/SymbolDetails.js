import React from "react";
import styled from "styled-components";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const SymbolDetailsBlock = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

class SymbolDetails extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {candles, symbol} = this.props.location.state;
        var reversedCandles = candles.slice().reverse();
        return(
            <SymbolDetailsBlock>
                <h4>{symbol.description}</h4>
                <LineChart
                    width={600}
                    height={400}
                    data={reversedCandles}
                    margin={{
                        top: 5, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="candleDate" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="closingPrice" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </SymbolDetailsBlock>
        );
    }

}

export default SymbolDetails;