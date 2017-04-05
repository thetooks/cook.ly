import React from 'react';
import SearchBar from './SearchBar/SearchBar.jsx';
import Recommendations from './Recommendations/Recommendations.jsx';
import styles from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        
        Search
        <SearchBar />
        
        <Recommendations title="Recently viewed" recommendations={recentlyViewedRecommendations}/>
        <Recommendations title="Homes" recommendations={recentlyViewedRecommendations}/>
        <Recommendations title="Future events" recommendations={recentlyViewedRecommendations}/>

         
      </div>
    )
  }
}

export default Search;

var recentlyViewedRecommendations = [
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  }
]
;