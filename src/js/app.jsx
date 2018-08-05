import React from 'react';
import SearchEntries from './components/SearchEntries';
import CityInfo from './components/City';
import WeatherHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>
          <p>Always know if you need an umbrela</p>
        </div>

        <SearchEntries />
        <br />
        <div className='row'>

          <CityInfo />

          <WeatherHistory />
        </div>
      </div>


    );
  }
}
