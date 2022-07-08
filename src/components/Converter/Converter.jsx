import { useState } from 'react';

import { ExchangeCurrency } from '../../service/ExchangeApi';

import s from './Converter.module.css';
import { IconContext } from 'react-icons';
import { GiMoneyStack } from 'react-icons/gi';

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
    <div className={s.wrapper}>
      <h1 className={s.wrapperTitle}>
        <IconContext.Provider value={{ color: 'white', size: '2em' }}>
          <div>
            <GiMoneyStack />
          </div>
        </IconContext.Provider>
        Currency converter
      </h1>

      <div className={s.currency}>
        <p className={s.currencyText}>
          Your current currency: <br></br>
          {currency}
        </p>
        <form className={s.currencyForm} onSubmit={handleSubmit}>
          <input
            className={s.currencyInput}
            type="text"
            value={value}
            onChange={handleChangeCurrency}
            placeholder="15 USD in UAH"
          />
        </form>
        {result && <p className={s.resultText}>{result}</p>}
      </div>
    </div>
  );
};

export default Converter;
