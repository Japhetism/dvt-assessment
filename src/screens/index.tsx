import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Tab from '../components/tab';
import Header from '../components/header';
import MusicGrid from './muisc.grid';
import MusicDetails from './music.details';

const Home = () => {
    return <React.Fragment>
        <Header />
        <Router>
            <Route exact path="/" component={MusicGrid} />
            <Route exact path="/playlist" component={MusicGrid} />
            <Route exact path="/playlist/:id" component={MusicDetails} />
        </Router>
    </React.Fragment> 
}

export default Home;