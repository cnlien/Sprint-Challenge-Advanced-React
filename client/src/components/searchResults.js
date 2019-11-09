import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchCard from './searchCard';

class SearchResults extends Component {
  
  constructor() {
    super();
    this.state= {
      searchData:[],
    }
  }

  componentDidMount () {
    fetch ("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(results => this.setState({searchData: results}, console.log("Search Results", results) ) )
      .catch(err => console.log(err))
      console.log("Search Component Did Mount")
  }

  render(){
    return (
      <div className="search-cards">
        {this.state.searchData.map(search => (
          <SearchCard
            name = {search.name}
            country={search.country}
            searches={search.searches}
          />
        ))}
      </div>
    );
  }
}


export default SearchResults;

