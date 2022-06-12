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
import ExchangeCurrency from 'service/ExchangeApi';

export class App extends Component {
  state = { userCurrency: 'USD', value: '' };
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

    ExchangeCurrency('USD', 'UAH', 200)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  handleChange = event => {
    this.setState({ userCurrency: event.target.value });
  };

  handleChangeCurrency = e => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { value, userCurrency } = this.state;
    return (
      <div>
        <p>If You want you can choose your currency:</p>
        <select
          onChange={this.handleChange}
          value={userCurrency}
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
        <p>Your current currency: {userCurrency}</p>

        <input type="text" value={value} onChange={this.handleChangeCurrency} />
      </div>
    );
  }
}

export default App;
