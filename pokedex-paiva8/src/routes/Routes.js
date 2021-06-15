import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPokemon from '../pages/DetailsPokemon/DetailsPokemon';
import Home from '../pages/Home/Home';
import Pokedex from '../pages/Pokedex/Pokedex';
import Error from '../pages/Error/Error';
import Global from '../styles/Global';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/details/:id">
                    <DetailsPokemon />
                </Route>

                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>

                <Route>
                    <Error />
                </Route>
            </Switch>
            <Global />
        </BrowserRouter>
    )
}
export default Router