import React, { Component } from 'react';
import axios from 'axios';

class data extends Component {
    state={ all: '' };

    componentWillMount() {
        console.log('wmdata');
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4b4a1310f1f32db76ad377720216c66e&language=en-US&page=1')
        .then((hasil) => this.setState({ all: hasil }));
    }
    
    renderLogic() {
        if (this.state.all) {
            return this.state.all;
        }
    }

    render() {
        
        return this.renderLogic;
    }
}

export default data;