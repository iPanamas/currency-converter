/* import Fox from './Vladimir';
import foxData from '../data/fox.json';

import Anna from './Anna';
import anime from '../data/anime.json';

import Car from './Ihor';
import car from '../data/car.json';

import Plane from './Denys';
import plane from '../data/plane.json';

import Sunrises from './Iryna';
import sunrises from '../data/sunrises.json';

import Lenka from './Lenka';
import dinosaur from '../data/dinosaur';

import Natalia from './Natalia';
import flowers from '../data/flower.json'; */
import { Component } from 'react';
// import Converter from './Converter';
import fetchUserCurrency from 'service/currencyAPI';
import currenciesList from '../data/currenciesList.json';

export class App extends Component {
  state = { userCurrency: 'USD' };
  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const lat = position?.coords?.latitude;
        const lon = position?.coords?.longitude;
        fetchUserCurrency(lat, lon).then(result =>
          this.setState({ userCurrency: result })
        );
      });
    }
  }

  handleChange = event => {
    this.setState({ userCurrency: event.target.value });
  };

  render() {
    return (
      <div>
        <select
          onChange={this.handleChange}
          value={this.state.userCurrency}
          name="currencyList"
          id=""
        >
          {Object.keys(currenciesList).map(currency => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
        <p>{this.state.userCurrency}</p>
      </div>
    );
  }
}

export default App;
