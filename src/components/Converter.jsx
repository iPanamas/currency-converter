import { useState } from 'react';
import { ExchangeCurrency } from 'service/ExchangeApi';

const Converter = ({ currency }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const handleChangeCurrency = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const splitValue = value.split(' ');
    const amount = Number(splitValue[0]);
    const from = splitValue[1];
    const to = splitValue[3];

    ExchangeCurrency(from, to, amount)
      .then(response => response.json())
      .then(({ result }) => setResult(result))
      .catch(error => console.log('error', error));
  };

  return (
    <div>
      <p>Your current currency: {currency}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChangeCurrency}
          placeholder="15 USD in UAH"
        />
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Converter;
