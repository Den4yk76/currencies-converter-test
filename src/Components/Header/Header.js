import s from './Header.module.css';
import { TbCurrencyDollar, TbCurrencyEuro } from 'react-icons/tb';

export default function Header(props) {
  const { UAH, EUR } = props.rates;
  return (
    <div className={s.header}>
      <div className={s.usd}>
        <TbCurrencyDollar />
        <span>{UAH.toFixed(4)}</span>
      </div>
      <div className={s.euro}>
        <TbCurrencyEuro />
        <span>{(UAH / EUR).toFixed(4)}</span>
      </div>
    </div>
  );
}
