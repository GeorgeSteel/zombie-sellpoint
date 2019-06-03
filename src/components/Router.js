import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Header from './Header';
import Login from './Login';
import Cuenta from './Cuenta';
import Inventario from './Inventario';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="mx-auto">
                    <Header/>
                    
                    <Switch>
                        <Route exact path="/" component={ Login } />
                        <Route exact path="/cuenta" component={ Cuenta } />
                        <Route exact path="/inventario" component={ Inventario } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
