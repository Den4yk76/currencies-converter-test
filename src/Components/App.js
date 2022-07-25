import './App.css';
import Header from './Header/Header';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const archiveRates = { USD: 1, EUR: 1, UAH: 36.687118 };
  const [rates, setRates] = useState(archiveRates);

  useEffect(() => {
    axios.get('https://api.exchangerate.host/latest?base=USD').then(response => {
      const { USD, EUR, UAH } = response.data.rates;
      setRates({ USD, EUR, UAH });
    });
  }, []);

  return (
    <>
      <Header rates={rates} />
      <CurrencyConverter rates={rates} />
    </>
  );
}

export default App;
