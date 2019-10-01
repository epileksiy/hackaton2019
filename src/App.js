import React from 'react';
import './App.css';
import {Router,Route, IndexRoute, browserHistory} from "react-router";
import Main from './components/Main';
import Nav from './components/Nav';
import Home from "./components/Home"
import Content from "./components/Content";
import Registration from "./components/registration";
import Login from "./components/login";
import Inpsquare from "./components/inpsquare";
import Addtask from "./components/addtask";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Nav} />
                    <Route path="/profile" component={Nav} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                    <Route path="/addsq" component={Inpsquare} />
                    <Route path="/addtask" component={Addtask} />
                </Router>
            </div>
        )
    };
}

export default App;
