import React from "react";
import styled from "styled-components";

const SymbolDetailsBlock = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
`;


class SymbolDetails extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {symbol} = this.props.location.state;
        return(
            <SymbolDetailsBlock>{symbol.description}</SymbolDetailsBlock>
        );
    }

}

export default SymbolDetails;