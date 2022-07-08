import { useState, useEffect } from 'react';
import currenciesList from 'data/currenciesList.json';
import s from './Rates.module.css';
import { fetchRates } from 'service/ExchangeAPI';
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
    <div className={s.rates}>
      <div className={s.ratesInfoWrap}>
        <p className={s.ratesInfoWrap__currentText}>
          Your current currency: {currency}
        </p>
        <p className={s.ratesInfoWrap__text}>
          If You want you can choose your currency -
          <select
            className={s.ratesSelect}
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
        </p>
      </div>
      {rates && (
        <div className={s.rate}>
          <table>
            <tbody>
              <tr>
                <td>Currency: </td>
                <td>Value: </td>
              </tr>
              {Object.entries(rates).map(([currency, value]) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rates;
