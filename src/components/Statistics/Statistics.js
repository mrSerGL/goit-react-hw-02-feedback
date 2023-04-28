import css from './Statistics.module.css';

function Statistics({options}) {

  const { good, neutral, bad } = options;

  return (
    <>
      <ul className={css.statisticsList}>
        <li >Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {good + bad + neutral}</li>
        <li>Positive feedback: {}</li>
      </ul>
    </>
  );
}

export default Statistics;
