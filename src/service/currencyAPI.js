import axios from 'axios';
const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';

export default async function fetchUserCurrency(lat, lon) {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}&language=en`
  );
  return data.results[0].annotations.currency.iso_code;
}
