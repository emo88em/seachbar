import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

   async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 292e76bd5fa8a0e86960b6f506636020c2ef7ce6423b2b663e874ded410a28bb'
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}> 
                <SearchBar userSubmits={this.onSearchSubmit} /> 
            </div>
        );
    }

};

export default App;