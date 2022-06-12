import axios from 'axios';

const API_KEY = 'FGaI2kzqlVYzDt5qjwpBuEDIa4Z6QaKa';

export default function ExchangeCurrency(from, to, amount) {
  const myHeaders = new Headers();
  myHeaders.append('apikey', API_KEY);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
}
