import { useState, useEffect } from 'react';
import currenciesList from 'data/currenciesList.json';

import { fetchRates } from 'service/ExchangeApi';
const Rates = ({ currency, setUserCurrency }) => {
  const [rates, setRates] = useState('');

  const handleChange = event => {
    setUserCurrency(event.target.value);
  };

  useEffect(() => {
    fetchRates(currency)
      .then(response => response.json())
      .then(({ rates }) => setRates(rates))
      .catch(error => console.log('error', error));
  }, [currency]);

  return (
    <>
      <p>If You want you can choose your currency:</p>
      <select
        value={currency}
        name="currencyList"
        id=""
        onChange={handleChange}
      >
        {Object.keys(currenciesList).map(currency => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>
      <p>Your current currency: {currency}</p>
      {rates && (
        <div>
          <ul>
            {Object.entries(rates).map(([currency, value]) => (
              <li key={currency}>
                <p>{currency + ': ' + value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Rates;
