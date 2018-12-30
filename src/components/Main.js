import React, { Component } from 'react';
import Navbar from './layout/navbar';
import {Route} from 'react-router-dom';
import { Provider } from '../context';
import Tracks from './tracks/Tracks';
import Lyrics from './tracks/Lyrics';
import Search from './tracks/Search';

class Main extends Component {

    render() {
        return <React.Fragment>
            <Provider>

                <Navbar />
                <div className="container">
                    <Route exact path="/" render={() => (
                        <div className="container">
                            <Search />
                            <Tracks />
                        </div>
                    )} />
                    <Route path="/lyrics/track/:id" component={Lyrics} />
                </div>
            </Provider>
        </React.Fragment>
    }
}
export default Main;