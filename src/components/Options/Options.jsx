import css from './Options.module.css'

const Options = ({ setFeedback, totalFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <ul className={css.feedbackOptions}>
      <li>
        <button type='submit' onClick={() => handleFeedback('good')}>Good</button>
      </li>
      <li>
        <button type='submit' onClick={() => handleFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button type='submit' onClick={() => handleFeedback('bad')}>Bad</button>
      </li>
    {totalFeedback !== 0 && (
      <li>
        <button type='submit' onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>Reset</button>
      </li>
    )}
    </ul>
  );
};

export default Options