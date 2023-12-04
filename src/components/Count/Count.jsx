import s from './Count.module.css';

export const Count = (props) => {
  return (
    <div className={s.count}>
      <button className={s.count__minus}>-</button>
      <p className={s.count__amount}>{props.count}</p>
      <button className={s.count__plus}>+</button>
    </div>
  );
};
