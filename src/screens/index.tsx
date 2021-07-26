import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/header';
import MusicGrid from './muisc.grid';
import MusicDetails from './music.details';

const Home = () => {
    return <React.Fragment>
        <Header />
        <Router>
            <Route exact path="/" component={MusicGrid} />
            <Route exact path="/artist" component={MusicGrid} />
            <Route exact path="/artist/:id" component={MusicDetails} />
        </Router>
    </React.Fragment> 
}

export default Home;