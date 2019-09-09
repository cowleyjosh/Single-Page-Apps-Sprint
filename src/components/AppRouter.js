
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import CharacterList from './CharacterList'
import EpisodesList from './EpisodesList';


// Router 

export default function AppRouter() {

    return <div>

        <Switch>

            <Route path='/episodes' component={EpisodesList} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/locations' component={LocationsList} />
            <Route component={WelcomePage} />

        </Switch>

    </div>

}