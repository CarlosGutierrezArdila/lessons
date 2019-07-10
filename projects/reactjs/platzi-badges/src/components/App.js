import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout'
import NotFound from './NotFound'


import Badges from '../pages/Badges'; 
import BadgesNew from '../pages/BadgeNew';
import BadgesEdit from '../pages/BadgeEdit';
import BadgesDetails from '../pages/BadgeDetailContainer';
import Home from '../pages/Home';
import RickMorty from '../pages/RickMorty';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgesNew} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgesEdit} />
                    <Route exact path="/badges/:badgeId" component={BadgesDetails} />
                    <Route exact path="/rick_morty" component={RickMorty} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;