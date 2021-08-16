import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtubeapi';
import VideoList from './videoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit('python');
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render () {
        return (
            <div className="ui justified container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;