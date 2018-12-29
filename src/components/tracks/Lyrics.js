import React,{Component} from 'react';
import axios from 'axios';

class Lyrics extends Component{
    constructor(props){
        super(props);
    this.state = {
        lyrics : {},
        track: {}
    }
    };

    componentDidMount() {
        let apikey = "19a0d9a4a91eef4c6185959ddc4f2d16";
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${apikey}`)
    .then(res => {
       this.setState({ lyrics : res.data.message.body.lyrics});

       axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${apikey}`)
       .then(res => {
          this.setState({ track : res.data.message.body.track});
            })
       .catch(err => console.log(err));
   })
   .catch(err => console.log(err));
}
        
  
    render() {
        const {lyrics, track} = this.state;
        console.log(lyrics,track);
        if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(track).length === 0)
        {
            return <div>
                <h1>laoding</h1>
            </div>
        }
        else{
        return <div>
            <div className="card">
                <h5 className="card-header">
                    {track.track_name} by <span className="text-secondary"> {track.artist_name}</span>
                    </h5>
                <div className="card-body">
                    <p className="card-text">{lyrics.lyrics_body}</p></div>
                    </div>
        
        <ul className="list-group mt-3">
            <li className="list-group-item">
                <strong>Album ID:</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
                <strong>Song Genre</strong>:
                {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
             </li>
            <li className="list-group-item">
                <strong>Explicit Words</strong>:
                {track.explicit === 0 ? 'NO' : 'YES'}
            </li>
        </ul>
    </div>
    }
}
}
export default Lyrics;