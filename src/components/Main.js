import React,{Component} from 'react';
import Navbar from './layout/navbar';
import {HashRouter, Route, Switch} from 'react-router-dom';
import{ Provider } from '../context';
import Tracks from './tracks/Tracks';
import Lyrics from './tracks/Lyrics';

class Main extends Component{

    render() {
        return <React.Fragment>
            <Provider>
               
            <Navbar/>
            <div className="container">
                <Route exact path = "/" render={() => (
            <div className="container">
            <Tracks/>
            </div>
                )}/>
                <Route path="/lyrics/track/:id" component={Lyrics}/>
                </div>
            </Provider>
            </React.Fragment>
    }
}
export default Main;