import React,{Component} from 'react';
import {Link } from 'react-router-dom';

const Track =(props) => {
    const {value} = props;
    console.log("^^^^^^^^^^^^^^^^^6");
    console.log(value);
    return(
        
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{value.artist_name}</h5>
                    <p className="card-text">
                    <strong><i className="fas fas-play"></i>Track</strong>: {value.track_name}
                    <strong><i className="fas fas-compact-disc"></i>Album</strong>: {value.album_name}</p>
                    <Link to={`lyrics/track/${value.track_id}`}
                    className="btn btn-dark btn-block">
                    <i className="fas fas-chevron-right">view lyrics</i></Link>
                </div>
            </div>
        </div>
    );
};
export default Track;