import css from './Statistics.module.css';

function Statistics({ options, positivePercentage }) {
  const { good, neutral, bad } = options;
  const { totalFeedback, positiveFeedbackPercentage } = positivePercentage;

  return (
    <>
      <ul className={css.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback(options)}</li>
        <li>Positive feedback: {positiveFeedbackPercentage(options)} %</li>
      </ul>
    </>
  );
}

export default Statistics;
