import React from 'react';
import Body from "./body/Body";
import Header from "./header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components";

const AppBlock = styled.div`
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
`;


export default class App extends React.Component {

    render() {
        return (
            <AppBlock>
                <Router>
                    <Header/>
                    <Body/>
                </Router>
            </AppBlock>
        );
    }
}
