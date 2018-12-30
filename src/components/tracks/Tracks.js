import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './Track';
class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        if (value.track_list == undefined || value.track_list.value === 0) {
                            return (<div style={{ textAlign: "center", fontSize: "35px" }}>
                                Loading...
                        </div>)
                        }
                        else {
                            return (
                                <React.Fragment>
                                    <h3 className="text-center mb-4">{value.heading}</h3>
                                    <div className="row">
                                        {value.track_list.map(item => (
                                            <Track key={item.track.track_id} value={item.track} />

                                        ))}

                                    </div>
                                </React.Fragment>
                            );
                        }
                    }
                }
            </Consumer>
        );
    }
}
export default Tracks;