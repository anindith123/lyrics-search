import React,{Component} from 'react';
import axios from 'axios';
const Context = React.createContext();

export class Provider extends Component {
    constructor(props){
        super(props);
    this.state = {
        track_list :  [],
        heading : 'Top 10 tracks'
    };
}

componentDidMount() {
    let apikey = "19a0d9a4a91eef4c6185959ddc4f2d16";
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${apikey}`)
    .then(res => {
        this.setState({ track_list : res.data.message.body.track_list});
        })
    .catch(err => console.log(err));
}
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;