import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackTitle: ' '

        };
        this.onChange = this.onChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ trackTitle: e.target.value });
    };

    formSubmit(dispatch, e) {
        e.preventDefault();
        let apikey = "19a0d9a4a91eef4c6185959ddc4f2d16";
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${apikey}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                <div className="form-group">
                                    <label>Enter song title</label>
                                    <input type="text" className="form-control form-control-lg"
                                        placeholder="song title..."
                                        name="trackTtitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange} />
                                </div>
                                <button className="btn btn primary btn-lg btn-block mb-5" type="submit">Get Lyrics</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}
export default Search;