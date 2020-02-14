import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../pages/home/Home'
import Header from '../components/Header'
import './App.scss';
import {Container} from "@material-ui/core";

const App = () => {
  return (
    <Router>
        <Switch>
            <Container>
                <Route path="/" exact={true}>
                    <Header />
                    <Home />
                </Route>
            </Container>
        </Switch>
    </Router>
  );
};

export default App;
