import currenciesList from '../data/currenciesList.json';

const API_KEY = 'FGaI2kzqlVYzDt5qjwpBuEDIa4Z6QaKa';

const myHeaders = new Headers();
myHeaders.append('apikey', API_KEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export function ExchangeCurrency(from, to, amount) {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
}

export function fetchRates(currency) {
  const symbols = Object.keys(currenciesList).join(',');
  console.log(symbols);
  return fetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${currency}`,
    requestOptions
  );
}
