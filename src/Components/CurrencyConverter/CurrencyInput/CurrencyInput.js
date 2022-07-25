import PropTypes from 'prop-types';
import s from './CurrencyInput.module.css';

export default function CurrencyInput({ amount, currency, currencies, onAmountChange, onCurrencyChange }) {
  return (
    <div className={s.group}>
      <input type="number" min={0} value={amount} onChange={e => onAmountChange(Number(e.target.value))} />
      <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={Math.random()} value={currency} className={s.option}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
