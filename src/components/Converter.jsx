import { useEffect } from 'react';
import { useState } from 'react';
import ExchangeCurrency from 'service/ExchangeApi';
import fetchUserCurrency from 'service/currencyAPI';
import currenciesList from '../data/currenciesList.json';

const Converter = () => {
  const [userCurrency, setUserCurrency] = useState('USD');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  
  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const lat = position?.coords?.latitude;
        const lon = position?.coords?.longitude;
        fetchUserCurrency(lat, lon).then(result => setUserCurrency(result));
      });
    }

    // ExchangeCurrency('USD', 'UAH', 200)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }, []);

  

  const handleChange = event => {
    setUserCurrency(event.target.value);

  };

  const handleChangeCurrency = event => {
    setValue(event.currentTarget.value);
    
  };

  const handleSubmit = event => {
    event.preventDefault();
    const splitValue = value.split(" ");
    const amount = Number(splitValue[0]);
    const from = splitValue[1];
    const to = splitValue[3];

       ExchangeCurrency(from, to, amount).then(response => response.json())
      .then(({result}) => setResult(result))
      .catch(error => console.log('error', error));
     
  }

  return (
    <div>
      <p>If You want you can choose your currency:</p>
      <select
        onChange={handleChange}
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
<form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeCurrency} placeholder="15 USD in UAH" />
      </form>
      {result && <p>{result}</p>}
      
    </div>
  );
};

export default Converter;
